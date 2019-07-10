import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <div className="flex justify-center pt-6">
      <form
        name="contact"
        className="w-full max-w-sm"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="md:flex md:items-center  mb-6">
          <div className="md:w-1/3">
            <label htmlFor="mail" className="text-gray-500 font-bold">
              Mail
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="mail"
              id="mail"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 w-full"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label htmlFor="objet" className="text-gray-500 font-bold">
              Objet
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="objet"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 w-full"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-2">
          <div className="md:w-1/3">
            <label htmlFor="mail" className="text-gray-500 font-bold">
              Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-3 w-full" />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </div>
  </Layout>
)
