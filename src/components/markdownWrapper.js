import React, { Component } from "react";
import 'styles/markdown.scss';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const { REACT_APP_BASE_HREF } = process.env;

export class InternalMarkdownWrapper extends Component {

  getMarkdown() {
    return this.readme
  }

  getMarkdownText() {
    fetch(this.readme)
        .then((response) => response.text())
        .then((text) => {
          const rawHtml = marked(text);
          document.querySelector('.auro-markdown').innerHTML = rawHtml;
          Prism.highlightAll();
        });

    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
      const link = marked.Renderer.prototype.link.call(this, href, title, text);
      let url = href
      url = url.replace(/^.*\/\/[^/]+/, '')

      if (href.includes('http')) {

        const newLink = `<a href="${href}"  rel="noopener noreferrer" target="_blank" className="externalLink">${text} <auro-icon customColor category="interface" name="external-link-md"></auro-icon></a>`

        return newLink;
      } else {

        return link.replace("href",`href="${url}"`);
      }
    };

    marked.setOptions({
        renderer: renderer
    });
  }

  render() {
    return (
      <section className="auro_baseType">

        <section
          className="auro-markdown"
          dangerouslySetInnerHTML={this.getMarkdownText()}
        />
      </section>
    );
  }
}
