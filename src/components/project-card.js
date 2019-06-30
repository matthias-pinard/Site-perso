// import PropTypes from "prop-types"
import React from "react"
import "../css/global.css"
import Background from "../images/xtrem.png"
const ProjectCard = () => (
  // <div className="max-w-sm shadow-lg rounded overflow-hidden">
  //     <img className="w-full" src={Background}/>
  //     <div className="px-6 py-4">
  //         <div className="font-bold text-xl mb-2"> Titre</div>
  //         <p className="text-gray-700 text-base">
  //             lDeserunt esse ad irure anim nostrud esse officia consectetur elit ex est enim quis elit.
  //         </p>
  //     </div>
  // </div>
  <div className="max-w-sm min-w-sm lg:max-w-full lg:flex flex-1 m-4 shadow-xl">
    <div
      className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style={{ backgroundImage: `url(${Background})` }}
    ></div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="text-gray-600 font-bold text-xl mb-2">Nom du projet</div>
      <p className="text-gray-700 text-base pb-20">
        Aute aliquip officia aliqua irure magna consectetur consequat officia
        cupidatat.

      </p>
    </div>
  </div>
)

export default ProjectCard
