const fs = require('fs');
const path = require('path');
const pug = require('pug');
const builder = require('xmlbuilder');

const profile = require('../profile.json');

const templateRoot = path.join(__dirname, '..', 'template');
const layout = path.join(templateRoot, 'layout.pug');
const output = path.join(__dirname, '..', 'public', 'index.html');
const sitemap_fn = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.readFile(layout, 'utf-8', (err, data) => {
  if (err) throw err;

  const compiler = pug.compile(data, { filename: layout, basedir: templateRoot, pretty: true });
  const content = compiler(profile);

  fs.writeFile(output, content, (err) => {
    if (err) throw err;

    console.log('done');
  });
});

const sitemap = {
  urlset: {
    '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
    url: [
      {
        loc: profile.siteRoot,
        lastmod: '2024-05-03',
        changefreq: 1,
        priority: 0.5,
      },
      {
        loc: `${profile.siteRoot}/public_key.txt`,
        lastmod: '2018-02-14',
        changefreq: 1,
        priority: 0.5,
      },
    ],
  },
};

const xml_sitemap = builder.create(sitemap).end({ pretty: true });
fs.writeFile(sitemap_fn, xml_sitemap, (err) => {
  if (err) throw err;

  console.log('done writing sitemap');
});
