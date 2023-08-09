
import { Analytics } from '@vercel/analytics/react';

export default function Head() {
  return (
    <head>     
    <title>
      Access Points Landing Page
    </title>
    <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="../dist/output.css" rel="stylesheet" />
        <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/a213531c-b59a-4368-8107-aadc01389900-loader.js" ></script>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "hunr1enqaf");
            `,
          }}
        />
      </head>

     
        
  );
}


