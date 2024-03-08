import { useEffect } from "react";
import { motion } from "framer-motion";

function ImageGrid() {
  const importImages = (r: Record<string, any>) => {
    const images: Record<string, any> = {};
    for (const key in r) {
      images[key] = r[key].default;
    }
    return images;
  };

  const imageContext = import.meta.glob("../../public/photos/*.jpg");
  const images = importImages(imageContext);
  useEffect(() => {
    console.log(images);
  }, [images]);
  return (
    <div className="flex flex-wrap gap-5 w-full justify-center">
      {Object.keys(images).map((key) => (
        <div className="w-auto object-cover h-auto sm:h-44 md:h-64 overflow-hidden">
          <a href={key} target="_blank">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              key={key}
              src={key}
              alt={key}
              className="w-full h-full"
            />
          </a>
        </div>
      ))}
    </div>
  );
  //   return <div>{images}</div>;
}

export default ImageGrid;
