"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{10903:function(e,t,a){a.r(t),a.d(t,{default:function(){return he}});var n=a(67294),l=a(10833),r=a(69688),o=n.createContext(null);function s(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(o.Provider,{value:a},t)}function i(){var e=(0,n.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function c(){var e,t=i(),a=t.metadata,r=t.frontMatter,o=t.assets;return n.createElement(l.d,{title:a.title,description:a.description,keywords:r.keywords,image:null!=(e=o.image)?e:r.image})}var d=a(86010),m=a(87524),u=a(87462),v=a(95999),b=a(39960);function p(e){var t=e.permalink,a=e.title,l=e.subLabel,r=e.isNext;return n.createElement(b.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function E(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(p,(0,u.Z)({},t,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(p,(0,u.Z)({},a,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){var e=i().metadata;return n.createElement(E,{previous:e.previous,next:e.next})}var g=a(52263),f=a(80143),_=a(35281),N=a(60373),Z=a(74477);var k={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){var t=k[e.versionMetadata.banner];return n.createElement(t,e)}function L(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(b.Z,{to:a,onClick:l},n.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){var t,a=e.className,l=e.versionMetadata,r=(0,g.Z)().siteConfig.title,o=(0,f.gA)({failfast:!0}).pluginId,s=(0,N.J)(o).savePreferredVersionName,i=(0,f.Jo)(o),c=i.latestDocSuggestion,m=i.latestVersionSuggestion,u=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,_.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(C,{siteTitle:r,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(L,{versionLabel:m.label,to:u.path,onClick:function(){return s(m.name)}})))}function U(e){var t=e.className,a=(0,Z.E)();return a.banner?n.createElement(T,{className:t,versionMetadata:a}):null}function w(e){var t=e.className,a=(0,Z.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,_.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function x(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:_.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var M=a(63366),B={iconEdit:"iconEdit_Z9Sw"},I=["className"];function V(e){var t=e.className,a=(0,M.Z)(e,I);return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(B.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function H(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:_.k.common.editThisPage},n.createElement(V,null),n.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var P={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function D(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(b.Z,{href:t,className:(0,d.Z)(P.tag,l?P.tagWithCount:P.tagRegular)},a,l&&n.createElement("span",null,l))}var S={tags:"tags_jXut",tag:"tag_QGVx"};function F(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(S.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:S.tag},n.createElement(D,{label:t,permalink:a}))}))))}var R={lastUpdated:"lastUpdated_vwxv"};function z(e){return n.createElement("div",{className:(0,d.Z)(_.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(F,e)))}function O(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(_.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(H,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",R.lastUpdated)},(a||l)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function j(){var e=i().metadata,t=e.editUrl,a=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,o=e.tags,s=o.length>0,c=!!(t||a||r);return s||c?n.createElement("footer",{className:(0,d.Z)(_.k.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(z,{tags:o}),c&&n.createElement(O,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var q=a(86043),G=a(93743),W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"},J=["collapsed"];function Q(e){var t=e.collapsed,a=(0,M.Z)(e,J);return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var X={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Y(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,o=(0,q.u)({initialState:!0}),s=o.collapsed,i=o.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(X.tocCollapsible,!s&&X.tocCollapsibleExpanded,a)},n.createElement(Q,{collapsed:s,onClick:i}),n.createElement(q.z,{lazy:!0,className:X.tocCollapsibleContent,collapsed:s},n.createElement(G.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}var K={tocMobile:"tocMobile_ITEo"};function $(){var e=i(),t=e.toc,a=e.frontMatter;return n.createElement(Y,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(_.k.docs.docTocMobile,K.tocMobile)})}var ee=a(39407);function te(){var e=i(),t=e.toc,a=e.frontMatter;return n.createElement(ee.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:_.k.docs.docTocDesktop})}var ae=a(92503),ne=a(20652);function le(e){var t,a,l,r,o=e.children,s=(t=i(),a=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:a.title);return n.createElement("div",{className:(0,d.Z)(_.k.docs.docMarkdown,"markdown")},s&&n.createElement("header",null,n.createElement(ae.Z,{as:"h1"},s)),n.createElement(ne.Z,null,o))}var re=a(53791),oe=a(48596),se=a(44996);function ie(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var ce={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function de(){var e=(0,se.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(b.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ie,{className:ce.breadcrumbHomeIcon})))}var me={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ue(e){var t=e.children,a=e.href,l="breadcrumbs__link";return e.isLast?n.createElement("span",{className:l,itemProp:"name"},t):a?n.createElement(b.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l},t)}function ve(e){var t=e.children,a=e.active,l=e.index,r=e.addMicrodata;return n.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function be(){var e=(0,re.s1)(),t=(0,oe.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(_.k.docs.docBreadcrumbs,me.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(de,null),e.map((function(t,a){var l=a===e.length-1;return n.createElement(ve,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(ue,{href:t.href,isLast:l},t.label))})))):null}var pe={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Ee(e){var t,a,l,r,o,s,c=e.children,u=(t=i(),a=t.frontMatter,l=t.toc,r=(0,m.i)(),o=a.hide_table_of_contents,s=!o&&l.length>0,{hidden:o,mobile:s?n.createElement($,null):void 0,desktop:!s||"desktop"!==r&&"ssr"!==r?void 0:n.createElement(te,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&pe.docItemCol)},n.createElement(U,null),n.createElement("div",{className:pe.docItemContainer},n.createElement("article",null,n.createElement(be,null),n.createElement(w,null),u.mobile,n.createElement(le,null,c),n.createElement(j,null)),n.createElement(h,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function he(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(c,null),n.createElement(Ee,null,n.createElement(a,null))))}},74477:function(e,t,a){a.d(t,{E:function(){return s},q:function(){return o}});var n=a(67294),l=a(69688),r=n.createContext(null);function o(e){var t=e.children,a=e.version;return n.createElement(r.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);