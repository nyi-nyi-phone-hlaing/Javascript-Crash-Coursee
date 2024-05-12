# Current HTML Code

### <code>index.html</code>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css" />
    <link
      rel="stylesheet"
      href="node_modules/@highlightjs/cdn-assets/styles/monokai.css" />
    <link rel="stylesheet" href="style.css" />
    <title>Learn Javascript Course</title>
  </head>
  <body>
    <div class="wrapper">
      <h1>hello world</h1>
      <textarea id="markdown-content" rows="10"></textarea>
      <div id="html-content"></div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/3.0.0/marked.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
    <script>
      // Initialize Highlight.js
      hljs.initHighlightingOnLoad();

      // Select the Markdown and HTML elements
      const markdownContent = document.querySelector("#markdown-content");
      const htmlContent = document.querySelector("#html-content");

      // Update HTML content when Markdown input changes
      markdownContent.addEventListener("input", (e) => {
        const { value } = e.target;
        htmlContent.innerHTML = marked(value);

        // Re-highlight code blocks after Markdown rendering
        htmlContent.querySelectorAll("pre code").forEach((block) => {
          hljs.highlightElement(block);
        });
      });

      // Initial rendering on page load
      document.addEventListener("DOMContentLoaded", () => {
        const initializeMarkdown = markdownContent.value;
        const initializeHtml = marked(initializeMarkdown);
        htmlContent.innerHTML = initializeHtml;

        // Highlight code blocks initially
        htmlContent.querySelectorAll("pre code").forEach((block) => {
          hljs.highlightElement(block);
        });
      });
    </script>
  </body>
</html>
```

<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas fames taciti, nibh tortor hendrerit eleifend penatibus commodo himenaeos proin est iaculis scelerisque, conubia molestie gravida dui ante feugiat natoque et orci. Habitasse habitant eleifend in porttitor tempor augue condimentum pellentesque, ullamcorper ridiculus parturient per ultricies nam neque etiam, ante cum fames congue tempus aliquet est. Penatibus mus cras blandit vulputate egestas aliquam bibendum fames vitae rhoncus pulvinar elementum class ante tellus, natoque pharetra hac dictumst viverra urna nulla consequat venenatis tempor felis pellentesque senectus.
</p>

### <code>style.css</code>

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

#html-content pre code,
#html-content code,
#html-content pre code span {
  font-family: "Source Code Pro", monospace !important;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  overflow: hidden;
}

.wrapper {
  width: 700px;
  height: 100vh;
  overflow: auto;
  background: #fff;
  padding: 10px;
}

.wrapper h1 {
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
}

.wrapper textarea {
  width: 100%;
  height: 300px;
  padding: 10px;
  resize: none;
  outline: none;
}

.wrapper #html-content {
  height: 590px;
  background: #fff;
  overflow: auto;
  padding: 10px;
  line-height: 2rem;
}
:where(#html-content code) {
  background: #272822;
  border-radius: 3px;
  padding: 0 5px;
  color: #a6e229;
}

#html-content p {
  font-size: 15px;
  color: #666;
}

#html-content h3 {
  font-size: 1.3rem;
  color: cornflowerblue;
  margin-bottom: 5px;
}
```

<p>
Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, class faucibus nibh feugiat erat natoque id nisl. Neque suspendisse accumsan primis eu rutrum morbi sapien dictumst cubilia, platea torquent pulvinar sed ornare purus mattis bibendum feugiat, faucibus facilisis tempor habitant quis porta suscipit blandit. Sociis nulla odio pellentesque ante cubilia fusce ad sodales aliquam, scelerisque fringilla taciti sem dictum class feugiat ullamcorper, risus nam suscipit lectus eu habitasse donec diam. Cursus platea posuere magna aliquet tristique fames, tincidunt felis blandit malesuada varius, praesent suspendisse feugiat facilisis convallis. Mauris dui mollis netus felis fermentum ultricies quisque condimentum, laoreet lacus convallis ultrices dictumst curae nibh a pretium, fringilla venenatis vehicula varius purus commodo hendrerit. Tempor nam facilisis praesent vulputate egestas nullam sodales cubilia, potenti litora pharetra tempus placerat nisl magna sed, dignissim ridiculus vitae facilisi morbi semper est. Posuere congue condimentum nec magnis habitasse massa eros integer porttitor, eget aptent tortor etiam netus fusce nam taciti nibh sollicitudin, venenatis aliquet pulvinar cras conubia convallis inceptos nostra. Habitasse ligula sem integer pulvinar dictumst parturient tincidunt, pretium at nisi tristique sollicitudin cras vulputate, vehicula morbi mus malesuada lobortis ac.

Quam himenaeos maecenas ante hac proin odio nisi iaculis, fringilla vulputate montes eu tincidunt laoreet turpis, platea vehicula ad metus cursus placerat sed. Rutrum viverra platea facilisi quis purus posuere sociosqu habitasse, nam venenatis commodo tortor aptent curabitur odio. Feugiat risus senectus pharetra tincidunt aliquet justo potenti nascetur libero laoreet, pellentesque cum facilisi ligula massa est auctor mus ornare suspendisse fames, scelerisque iaculis nisl malesuada ridiculus parturient natoque tortor vitae. Diam fermentum sagittis justo quisque habitasse luctus, porttitor eros hendrerit faucibus mauris, condimentum hac sodales dictumst enim. Auctor pharetra praesent litora diam aenean montes et est magnis, varius blandit urna nullam posuere aptent cursus pulvinar. Malesuada egestas at integer magnis dictumst habitasse nulla libero sem urna, eget nam elementum faucibus vivamus neque interdum per enim posuere dapibus, proin netus himenaeos scelerisque sociosqu tellus quisque aenean nibh. Diam leo cras mi vehicula ullamcorper interdum risus, id tincidunt magnis felis nisi neque ante mattis, ultricies praesent pellentesque auctor ultrices lacus.

</p>
