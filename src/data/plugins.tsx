/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { sortBy } from '@site/src/utils/jsUtils';

/*
 * ADD YOUR PLUGIN TO THE AMBIENT LIBRARY:
 *
 * Requirements for adding your plugin to our library:
 * - It is a production-ready plugin
 * - It has a README.md file that was generated by a test.
 *
 * Instructions:
 * - Add your plugin in the json array below
 * - Use relevant tags to qualify your plugin (read the tag descriptions below)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/ambientkit.github.io/tree/<branch>/src/data/plugins
 *
 * Please help us maintain this library page data:
 * - Update plugins with wrong data
 * - Ensure plugin tags remains correct over time
 * - Add missing Ambient plugins (if the plugin owner agreed)
 *
 */

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'standard'
  | 'generic'
  | 'router'
  | 'templateengine'
  | 'sessionmanager'
  | 'middleware'
  | 'storagesystem'
  | 'logger';

export type Plugin = {
  title: string;
  description: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite plugins that you must absolutely check-out!',
    color: '#e9669e',
  },

  // For open-source sites, a link to the source code is required
  opensource: {
    label: 'Open-Source',
    description: 'Open-Source plugins can be useful for inspiration!',
    color: '#39ca30',
  },

  standard: {
    label: 'Standard Library',
    description: 'Plugins built by the Ambient team.',
    color: '#dfd545',
  },

  generic: {
    label: 'Generic',
    description:
      'Plugins that perform blog or management capabilities.',
    color: '#a44fb7',
  },

  router: {
    label: 'Router',
    description:
      'Plugins that provide routing capabilities.',
    color: '#127f82',
  },

  templateengine: {
    label: 'Template Engine',
    description:
      'Plugins that render HTML from templates.',
    color: '#fe6829',
  },

  sessionmanager: {
    label: 'Session Manager',
    description:
      'Plugins that manage user authentication and user sessions/',
    color: '#8c2f00',
  },

  middleware: {
    label: 'Middleware',
    description: 'Plugins that include middleware.',
    color: '#4267b2',
  },

  storagesystem: {
    label: 'Storage System',
    description:
      'Plugins that read and write the app configuration.',
    color: '#14cfc3',
  },

  logger: {
    label: 'Logger',
    description:
      '',
    color: '#ffcfc3',
  },
};

// Add your plugin to this list
// prettier-ignore
const Plugins: Plugin[] = [
  {
    title: "author",
    description: "Package author is an Ambient plugin that sets an author meta tag in the HTML header.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/author",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/author",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "awayrouter",
    description: "Package awayrouter is an Ambient plugin for a router using a variation of the matryer/way router.",
    website: "https://github.com/matryer/way",
    source: "https://github.com/ambientkit/plugin/tree/main/router/awayrouter",
    tags: ["opensource", "standard", "router", "favorite"],
  },
  {
    title: "awsbucketstorage",
    description: "Package awsbucketstorage is an Ambient plugin that provides storage in AWS S3.",
    website: "https://github.com/ambientkit/plugin/tree/main/storage/awsbucketstorage",
    source: "https://github.com/ambientkit/plugin/tree/main/storage/awsbucketstorage",
    tags: ["opensource", "standard", "storagesystem"],
  },
  {
    title: "azureblobstorage",
    description: "Package azureblobstorage is an Ambient plugin that provides storage in Azure Blob Storage.",
    website: "https://github.com/ambientkit/plugin/tree/main/storage/azureblobstorage",
    source: "https://github.com/ambientkit/plugin/tree/main/storage/azureblobstorage",
    tags: ["opensource", "standard", "storagesystem"],
  },
  {
    title: "bearblog",
    description: "Package bearblog is an Ambient plugin that provides basic blog functionality.",
    website: "https://github.com/HermanMartinus/bearblog/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/bearblog",
    tags: ["opensource", "standard", "generic", "favorite"],
  },
  {
    title: "bearcss",
    description: "Package bearcss is an Ambient plugin that provides styles from the Bear Blog.",
    website: "https://bearblog.dev/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/bearcss",
    tags: ["opensource", "standard", "generic", "favorite"],
  },
  {
    title: "bootstrap",
    description: "Package bootstrap is an Ambient plugin that adds the Bootstrap library to all pages.",
    website: "https://getbootstrap.com/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/bootstrap",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "charset",
    description: "Package charset is an Ambient plugin that sets a charset meta tag in the HTML header.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/charset",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/charset",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "chirouter",
    description: "Package chirouter is an Ambient plugin for a router using go-chi/chi.",
    website: "https://github.com/go-chi/chi",
    source: "https://github.com/ambientkit/plugin/tree/main/router/chirouter",
    tags: ["opensource", "standard", "router"],
  },
  {
    title: "cors",
    description: "Package cors is an Ambient plugin that enables CORS.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/cors",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/cors",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "debugpprof",
    description: "Package debugpprof is an Ambient plugin that provides pprof functionality.",
    website: "https://pkg.go.dev/net/http/pprof",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/debugpprof",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "description",
    description: "Package description is an Ambient plugin that sets a description meta tag in the HTML header.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/description",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/description",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "disqus",
    description: "Package disqus is an Ambient plugin that provides Disqus commenting.",
    website: "https://disqus.com/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/disqus",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "envinfo",
    description: "Package envinfo is an Ambient plugin that provides a dashboard page showing env variables.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/envinfo",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/envinfo",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "etagcache",
    description: "Package etagcache is an Ambient plugin that provides caching using etag.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/etagcache",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/etagcache",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "foundation",
    description: "Package foundation is an Ambient plugin that adds the Foundation library to all pages.",
    website: "https://get.foundation/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/foundation",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "gcpbucketstorage",
    description: "Package gcpbucketstorage is an Ambient plugin that provides storage in GCP Cloud Storage.",
    website: "https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage",
    source: "https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage",
    tags: ["opensource", "standard", "storagesystem"],
  },
  {
    title: "googleanalytics",
    description: "Package googleanalytics is an Ambient plugin that provides Google Analytics tracking.",
    website: "https://analytics.google.com/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/googleanalytics",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "gorillamux",
    description: "Package gorillamux is an Ambient plugin for a router using gorilla/mux.",
    website: "https://github.com/gorilla/mux",
    source: "https://github.com/ambientkit/plugin/tree/main/router/gorillamux",
    tags: ["opensource", "standard", "router"],
  },
  {
    title: "gzipresponse",
    description: "Package gzipresponse is an Ambient plugin that provides gzip content compression middleware.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/gzipresponse",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/gzipresponse",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "healthcheck",
    description: "Package healthcheck is an Ambient plugin that responds back with 200.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/healthcheck",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/healthcheck",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "htmlengine",
    description: "Package bearblog is an Ambient plugin that provides basic blog functionality.",
    website: "https://github.com/ambientkit/plugin/tree/main/templateengine/htmlengine",
    source: "https://github.com/ambientkit/plugin/tree/main/templateengine/htmlengine",
    tags: ["opensource", "standard", "templateengine"],
  },
  {
    title: "htmx",
    description: "Package htmx is an Ambient plugin that adds the htmx JavaScript library to all pages.",
    website: "https://htmx.org/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/htmx",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "jshttprouter",
    description: "Package jshttprouter is an Ambient plugin for a router using julienschmidt/httprouter.",
    website: "https://github.com/julienschmidt/httprouter",
    source: "https://github.com/ambientkit/plugin/tree/main/router/jshttprouter",
    tags: ["opensource", "standard", "router"],
  },
  {
    title: "jquery",
    description: "Package jquery is an Ambient plugin that adds the jQuery library to all pages.",
    website: "https://jquery.com/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/jquery",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "jwt",
    description: "Package jwt is an Ambient plugin that enables jwt.",
    website: "https://github.com/golang-jwt/jwt",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/jwt",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "localstorage",
    description: "Package localstorage is an Ambient plugin that provides local storage.",
    website: "https://github.com/ambientkit/plugin/tree/main/storage/localstorage",
    source: "https://github.com/ambientkit/plugin/tree/main/storage/localstorage",
    tags: ["opensource", "standard", "storagesystem"],
  },
  {
    title: "logrequest",
    description: "Package logrequest is an Ambient plugin that provides request logging middleware.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/logrequest",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/logrequest",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "logruslogger",
    description: "Package logruslogger is an Ambient plugin that provides log functionality using logrus.",
    website: "https://github.com/sirupsen/logrus",
    source: "https://github.com/ambientkit/plugin/tree/main/logger/logruslogger",
    tags: ["opensource", "standard", "logger"],
  },
  {
    title: "memorystorage",
    description: "Package memorystorage is an Ambient plugin that provides storage in memory.",
    website: "https://github.com/ambientkit/plugin/tree/main/storage/memorystorage",
    source: "https://github.com/ambientkit/plugin/tree/main/storage/memorystorage",
    tags: ["opensource", "standard", "storagesystem"],
  },
  {
    title: "notrailingslash",
    description: "Package notrailingslash is an Ambient plugin with middleware that removes trailing slashes from requests.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/notrailingslash",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/notrailingslash",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "patrouter",
    description: "Package patrouter is an Ambient plugin for a router using bmizerany/pat.",
    website: "https://github.com/bmizerany/pat",
    source: "https://github.com/ambientkit/plugin/tree/main/router/patrouter",
    tags: ["opensource", "standard", "router"],
  },
  {
    title: "pluginmanager",
    description: "Package pluginmanager is an Ambient plugin that provides a plugin management system.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager",
    tags: ["opensource", "standard", "generic", "favorite"],
  },
  {
    title: "prism",
    description: "Package prism is an Ambient plugin that provides syntax highlighting using Prism.",
    website: "https://prismjs.com/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/prism",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "proxyrequest",
    description: "Package proxyrequest is an Ambient plugin with middleware that proxies requests.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/proxyrequest",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/proxyrequest",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "redirecttourl",
    description: "Package redirecttourl is an Ambient plugin with middleware that redirects to the correct site URL.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/redirecttourl",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/redirecttourl",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "robots",
    description: "Package robots is an Ambient plugin that serves a robots.txt file.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/robots",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/robots",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "routerecorder",
    description: "Package routerecorder keeps track of each of the routes a plugin adds to the router. It is not a functioning router.",
    website: "https://github.com/ambientkit/plugin/tree/main/router/routerecorder",
    source: "https://github.com/ambientkit/plugin/tree/main/router/routerecorder",
    tags: ["opensource", "standard", "router"],
  },
  {
    title: "rove",
    description: "Package rove is an Ambient plugin that provides MySQL migrations.",
    website: "https://github.com/josephspurrier/rove",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/rove",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "rssfeed",
    description: "Package rssfeed is an Ambient plugin that provides an RSS feed.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/rssfeed",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/rssfeed",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "scssession",
    description: "Package scssession is an Ambient plugin that provides session management using SCS.",
    website: "https://github.com/alexedwards/scss",
    source: "https://github.com/ambientkit/plugin/tree/main/sessionmanager/scssession",
    tags: ["opensource", "standard", "sessionmanager", "middleware"],
  },
  {
    title: "securedashboard",
    description: "Package securedashboard is an Ambient plugins that prevents unauthenticated access to the /dashboard routes.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/securedashboard",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/securedashboard",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "simplelogin",
    description: "Package simplelogin is an Ambient plugin that provides a basic website template with a login page.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/simplelogin",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/simplelogin",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "sitemap",
    description: "Package sitemap is an Ambient plugin that provides a sitemap.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/sitemap",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/sitemap",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "stackedit",
    description: "Package stackedit is an Ambient plugin that provides a markdown editor using StackEdit.",
    website: "https://stackedit.io/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/stackedit",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "styles",
    description: "Package styles is an Ambient plugin that provides a page to edit styles.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/styles",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/styles",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "tailwindcss",
    description: "Package tailwindcss is an Ambient plugin that adds the tailwindcss library to all pages.",
    website: "https://tailwindcss.com/",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/tailwindcss",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "uptimerobotok",
    description: "Package uptimerobotok is an Ambient plugin to support UptimeRobot that sends a 200 status code when a HEAD request is sent to /.",
    website: "https://github.com/ambientkit/plugin/tree/main/middleware/uptimerobotok",
    source: "https://github.com/ambientkit/plugin/tree/main/middleware/uptimerobotok",
    tags: ["opensource", "standard", "middleware"],
  },
  {
    title: "viewport",
    description: "Package viewport is an Ambient plugin that sets a viewport meta tag in the HTML header.",
    website: "https://github.com/ambientkit/plugin/tree/main/generic/viewport",
    source: "https://github.com/ambientkit/plugin/tree/main/generic/viewport",
    tags: ["opensource", "standard", "generic"],
  },
  {
    title: "zaplogger",
    description: "Package zaplogger is an Ambient plugin that provides logging using zap.",
    website: "https://github.com/uber-go/zap",
    source: "https://github.com/ambientkit/plugin/tree/main/logger/zaplogger",
    tags: ["opensource", "standard", "logger"],
  },
  //   /*
  //   Pro Tip: add your plugin in alphabetical order.
  //   Appending your plugin here (at the end) is more likely to produce Git conflicts.
  //    */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortPlugins() {
  let result = Plugins;
  // Sort by site name
  result = sortBy(result, (p) => p.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (p) => !p.tags.includes('favorite'));
  return result;
}

export const sortedPlugins = sortPlugins();
