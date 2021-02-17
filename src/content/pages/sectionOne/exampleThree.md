# Links are smart

Adding links to a page are super easy with markdown and some extra added awesome.

## External links

When adding an external link the page build automatically determines if it is an external or internal link. It's not magic, be sure to update the `REACT_APP_BASE_HREF` variable in the `./.env` file.

Hello there, [I am an external link](https://www.alaskaair.com/route-map/)

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
Hello there, [I am an external link](https://www.alaskaair.com/route-map/)
```

</auro-accordion>

Look at me, I am an [internal link](exampleOne)

<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>

```html
Look at me, I am an [internal link](exampleOne)
```

</auro-accordion>
