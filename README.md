# SpringBoot - Thymeleaf - Tailwindcss

demo app skeleton using

* [SpringBoot](https://spring.io/projects/spring-boot)
* [Thymleaf](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html)
* [Tailwindcss](https://tailwindcss.com/)

## Development

start java application:

```sh
./mvnw spring-boot:run
```

### npm tasks

* `npm run build`
  * build dev bundle of stylesheets (not minified and not purged)
* `npm run dev`
  * start watching files and compile it on change

Note that the npm tasks are building development bundles by default.  
If you want to have optimized bundles you can set the `NODE_ENV` environment like `NODE_ENV=production npm run build`.  
(which the maven build does by default)
