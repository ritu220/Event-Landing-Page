import React from "react";
import { motion } from "framer-motion";
import styles from "../Tracks_new/style";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import "./NewMilestones.css";

export const NewMilestone = () => {
  return (
    <div className="NewMilestones">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] my-2 lg:my-6 font-[Oswald]">
                Why Sponsor Us?
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <div className="whySponsors mx-2 mt-8 w-full lg:mx-auto lg:w-5/6">
        <div className="content bg-gradient-to-br from-[rgba(209,209,209,0.2)] to-[rgba(209,209,209,0.1)] backdrop-blur-[1px]">
          <p className="paraHead mb-2 lg:mb-4">WHY SPONSOR OUR EVENT?</p>
          <p className="paraContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit quam sit amet nunc euismod, quis tristique metus vehicula  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit quam sit amet nunc euismod, quis tristique metus vehicula


          </p>
          <div className="mt-8 flex flex-row">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              <a
                href="$"
                target="_blank"
                rel="noreferrer"
              >
                VIEW BROCHURE
              </a>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs md:text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <a
                href="$"
                target="_blank"
                rel="noreferrer"
                className="relative p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                CODE OF CONDUCT
              </a>
            </button>
          </div>
        </div>
        {/* <div className="chart bg-gradient-to-br from-[rgba(209,209,209,0.2)] to-[rgba(209,209,209,0.1)] backdrop-blur-[1px] rounded-3xl h-auto">
          <div className="flex justify-center items-center">
            <picture>
              <source srcSet="Frame55-1.webp" type="image/webp" />
              <img src="Frame55-1.png" className="" alt="chart" />
            </picture>
          </div>
        </div> */}
      </div>
    </div>
  );
};
