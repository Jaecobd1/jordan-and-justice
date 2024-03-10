import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../../imagePaths.json";

function ImageGrid() {
  const [displayCountMultiplier, setDisplayCountMultiplier] = useState(1);
  const importImages = (r: Record<string, any>) => {
    const images: Record<string, any> = {};
    let count = 0;
    if (!r.length) {
      for (const key in r) {
        if (count > 25 * displayCountMultiplier) break;
        images[count] = r[key];
        count++;
      }
    } else {
      r.map((key: any, index: any) => {
        if (index > 24 * displayCountMultiplier) return;
        images[index] = key;
      });
    }
    console.log(images);
    return images;
  };

  // const imageContext = import.meta.glob("/photos/*.jpg");
  // const [images, setImages] = useState(importImages(imageContext));

  // const totalImageCount = Array.from(Object.keys(imageContext)).length;
  // const [hideLoadMore, setHideLoadMore] = useState(false);
  // const loadMore = () => {
  //   setDisplayCountMultiplier(displayCountMultiplier + 1);
  //   if (filter === "Older") setImages(importImages(Object.keys(imageContext)));
  //   else if (filter === "Newer")
  //     setImages(importImages(Object.keys(reversedImageContext)));
  //   else if (filter === "Random")
  //     setImages(
  //       importImages(Object.keys(imageContext).sort(() => Math.random() - 0.5))
  //     );
  //   if (totalImageCount < 25 * displayCountMultiplier) {
  //     setHideLoadMore(true);
  //   }
  // };

  // const [filter, setFilter] = useState("Older");
  // const reversedImageContext = Object.fromEntries(
  //   Object.entries(imageContext).reverse()
  // );

  // useEffect(() => {
  //   if (filter === "Older") {
  //     setImages(importImages(Object.keys(imageContext)));
  //   } else if (filter === "Newer") {
  //     setImages(importImages(Object.keys(reversedImageContext)));
  //   } else if (filter === "Random") {
  //     setImages(
  //       importImages(Object.keys(imageContext).sort(() => Math.random() - 0.5))
  //     );
  //   }
  // }, [filter]);

  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <div className="mt-4 flex flex-col">
      <div className="flex flex-col w-2/5 text-center mx-auto">
        {/* <select
          // onChange={(e) => setFilter(e.target.value)}
          className="border-2 border-black p-2 rounded-lg"
        >
          <option value="Older">Older</option>
          <option value="Newer">Newer</option>
          <option value="Random">Random</option>
        </select> */}
        <a
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-6 p-4 w-44 mx-auto"
          href="../../photos/j&j edited.zip"
          download="j&j edited.zip"
        >
          Download All
        </a>
      </div>
      {/* <div className="flex flex-wrap gap-5 w-full justify-center mt-12">
        {Object.keys(images).map((key) => {
          if (typeof images[key] !== "string") return;
          return (
            <div
              className=" w-3/4 relative object-cover h-44 md:h-64 overflow-hidden group"
              key={key}
            >
              <a
                href={key}
                download={key.split("/").pop()}
                className="flex sm:hidden cursor-pointer rounded-lg m-1 absolute group-hover:flex z-10 sm:text-black h-12 w-12 top-0 sm:bg-slate-300/40  items-center justify-center right-0 hover:bg-slate-900 hover:text-white bg-slate-900 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <a
                href={images[key]}
                target="_blank"
                className="position  h-full w-full"
              >
                {typeof images[key] === "string" ? (
                  <motion.img
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.1 }}
                    src={images[key]}
                    alt={images[key]}
                    className="w-full h-full"
                  />
                ) : (
                  <span className="w-full h-full bg-slate-300/40"></span>
                )}
              </a>
            </div>
          );
        })}
      </div> */}
      <div className="flex flex-wrap -mx-4 mt-4">
        {images.map((image: string, index) => {
          return (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4"
              key={index}
            >
              <div className=" relative overflow-hidden rounded shadow-md group">
                <a
                  href={image}
                  download={image.split("/").pop()}
                  className="flex sm:hidden cursor-pointer rounded-lg m-1 absolute group-hover:flex z-10 sm:text-black h-12 w-12 top-0 sm:bg-slate-300/40  items-center justify-center right-0 hover:bg-slate-900 hover:text-white bg-slate-900 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
                <a
                  href={image}
                  target="_blank"
                  className="position  h-full w-full"
                >
                  {typeof image === "string" ? (
                    <motion.img
                      initial="hidden"
                      animate="visible"
                      variants={imageVariants}
                      transition={{ duration: 1 }}
                      whileHover={{ scale: 1.1 }}
                      src={image}
                      alt={image}
                      className="object-cover w-full h-full aspect-w-1 aspect-h-1"
                    />
                  ) : (
                    <span className="w-full h-full bg-slate-300/40"></span>
                  )}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <button
        // onClick={() => loadMore()}
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-6 w-44 mx-auto mb-6"
        // hidden={hideLoadMore}
      >
        Load More
      </button>
    </div>
  );
  //   return <div>{images}</div>;
}

export default ImageGrid;
