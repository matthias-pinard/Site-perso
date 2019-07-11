// import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import "../css/global.css"
import { IProject } from "../interface/IProject"

const ProjectCard = (projet: IProject) => {
  const background = projet.image
  return (
    <div className="max-w-md min-w-sm lg:max-w-full lg:flex flex-1 m-4 shadow-xl self-stretch">
      {projet.image && (
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden
        "
          style={{ backgroundImage: `url(${background})` }}
        ></div>
      )}
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="text-gray-600 font-bold text-xl mb-2">
          {projet.name}
        </div>
        <p className="text-gray-700 text-sm mb-4 text-justify">
          {projet.description}
        </p>
        <div className="flex justify-around max-w-full">
          {projet.video && (
            <a target="_blank" href={projet.video}>
              <FontAwesomeIcon icon={faYoutube} size="lg" className="text-blue-500" />
            </a>
          )}
          {projet.github && (
            <a target="_blank" href={projet.github}>
              <FontAwesomeIcon icon={faGithub} size="lg" className="text-blue-500"/>
            </a>
          )}
          {projet.website && (
            <a target="_blank" href={projet.website}>
              <FontAwesomeIcon icon={faGlobe} size="lg" className="text-blue-500"/>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
