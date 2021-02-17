# Welcome to Auro Blog

What is Auro Blog? Well, it's a simple document website platform based off of create-react-app. Easy to use, easy to update. Start with this baseline website project and build in all the features you ever need when you need them.

As a bonus, the [Auro Design System](https://auro.alaskaair.com/) is built into this blog app for easy use of all the Auro Design System pre-developed custom elements.

## Write with ease and markdown

To make things as easy as possible, create all your pages using markdown which are transformed to HTML in real-time for viewing in your browser. See the included pages for great examples of how-to build content.

### Links

Site links come with an accessibility helper. Set your site domain with the `REACT_APP_BASE_HREF` variable in the  `./.env` file. Setting this domain will assist with determining if the URL is internal or external. If external, the link will automatically be wrapped with the following code in order to open in a new window and apply a notification icon.

```html
<a href="${href}" rel="noopener noreferrer" target="_blank" className="externalLink">
  ${text} <auro-icon customColor category="interface" name="external-link-md"></auro-icon>
</a>
```

### Add a new page

Adding new content us super easy. Simply add a new markdown document to the `./src/content/pages` dir. Create any kind of sub directories in there you want. Then run `npm run generate` to create the updated resource files to serve up the new page.

Adding pages to the nav is manual to allow full control over your navigation. To do this, open and edit `./src/side-nav.js`.

## See example blog site

[Example blog site](https://example-auro-blog.surge.sh/)
