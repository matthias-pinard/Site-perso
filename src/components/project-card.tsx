// import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import "../css/global.css"
import { IProject } from "../interface/IProject"

const ProjectCard = (projet: IProject) => {
  const background = projet.image
  return (
    // <div className="max-w-sm shadow-lg rounded overflow-hidden">
    //     <img className="w-full" src={Background}/>
    //     <div className="px-6 py-4">
    //         <div className="font-bold text-xl mb-2"> Titre</div>
    //         <p className="text-gray-700 text-base">
    //             lDeserunt esse ad irure anim nostrud esse officia consectetur elit ex est enim quis elit.
    //         </p>
    //     </div>
    // </div>
    <div className="max-w-md min-w-sm lg:max-w-full lg:flex flex-1 m-4 shadow-xl">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden
        "
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="text-gray-600 font-bold text-xl mb-2">
          {projet.name}
        </div>
        <p className="text-gray-700 text-base mb-4 text-justify">{projet.description}</p>
        {/* <FontAwesomeIcon icon={faYoutube} size="lg"/> */}
      </div>
    </div>
  )
}

export default ProjectCard
