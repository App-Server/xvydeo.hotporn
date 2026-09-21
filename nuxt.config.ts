// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css',
          integrity: 'sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        // Bootstrap JS
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI',
          crossorigin: 'anonymous',
          tagPosition: 'bodyClose'
        },
        
        // Google Analytics (gtag.js)
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-H1Z92RMDED',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H1Z92RMDED');
          `,
          type: 'text/javascript'
        },

        // Scripts globais da rede de anúncios
        {
          src: 'https://pl31436303.profitableratecpmnetwork.com/06/5b/21/065b214dfb2e80807ebeb7c6f9bc4b54.js',
          defer: true
        },
        {
          src: 'https://pl31436306.profitableratecpmnetwork.com/64/42/32/644232741aa0114c8ef020ea932f9987.js',
          defer: true
        },
        {
          src: 'https://pl31436304.profitableratecpmnetwork.com/fc937d79a666574dbebc15156cb96b43/invoke.js',
          async: true,
          'data-cfasync': 'false' as any
        }
      ]
    }
  }
})