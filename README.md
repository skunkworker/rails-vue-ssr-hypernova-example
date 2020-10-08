# Rails + Vue SSR example

This example was made because of the following:

* Use components from `app/javascript` with Rails and SSR.
* Custom hypernova ruby API implementation with single and batch support.
* Cachable responses from hypernova.

**Running the example**
Run the procfile using foreman.
Then navigate to [localhost:3000](localhost:3000)
```
foreman start -f Procfile.dev
````

**Why wasn't `hypernova-ruby` used?**

Hypernova ruby writes to the `document.body` and when trying to cache the result you would get `__hypernova_render_token[0]__`, instead I wrote a simple helper using HTTParty that supports a batch of multiple components rendered together and a singular component render. [See this for more information about this issue](https://github.com/airbnb/hypernova-ruby/issues/15)


**How can I add more components?**

In the hypernova server index file `/vue-ssr/src/index.js` add your own component to the `if/else` block in `getComponent` and import the `.vue` file in the headers. Included is some basic webpack config for easy imports, like `Components/FooBar.vue` to resolve the file `/app/javascript/src/components/FooBar.vue`.



