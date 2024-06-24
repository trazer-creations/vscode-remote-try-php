(()=>{"use strict";var e={875:(e,t,o)=>{var r=o(196),i=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,o){var r,s={},c=null,p=null;for(r in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)n.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:p,props:s,_owner:l.current}}t.jsx=s,t.jsxs=s},250:(e,t,o)=>{e.exports=o(875)},196:e=>{e.exports=window.React}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}(()=>{const e=window.wp.element,t=(0,e.forwardRef)((function({icon:t,size:o=24,...r},i){return(0,e.cloneElement)(t,{width:o,height:o,...r,ref:i})})),r=window.wp.primitives;var i=o(250);const n=(0,i.jsx)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(r.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"})}),l=window.wp.blocks,a=window.wp.i18n,s=window.wp.blockEditor,c=window.wc.blocksCheckout,p=window.wc.wcSettings,d=window.wp.components,m=(0,p.getSetting)("adminUrl"),{optinEnabled:u,defaultText:w}=(0,p.getSetting)("mailpoet_data");function f(){return(0,i.jsxs)(d.Placeholder,{icon:(0,i.jsx)(t,{icon:n}),label:(0,a.__)("Marketing opt-in","mailpoet"),className:"wp-block-mailpoet-newsletter-block-placeholder",children:[(0,i.jsx)("span",{className:"wp-block-mailpoet-newsletter-block-placeholder__description",children:(0,a.__)("MailPoet marketing opt-in would be shown here if enabled. You can enable from the settings page.","mailpoet")}),(0,i.jsx)(d.Button,{variant:"primary",href:`${m}admin.php?page=mailpoet-settings#/woocommerce`,target:"_blank",rel:"noopener noreferrer",className:"wp-block-mailpoet-newsletter-block-placeholder__button",children:(0,a.__)("Enable opt-in for Checkout","mailpoet")})]})}const{defaultText:k}=(0,p.getSetting)("mailpoet_data"),h={text:{type:"string",default:k}},b=JSON.parse('{"apiVersion":2,"name":"mailpoet/marketing-optin-block","version":"0.1.0","title":"MailPoet Marketing Opt-in","category":"mailpoet","textdomain":"mailpoet","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":false}}},"parent":["woocommerce/checkout-contact-information-block"],"editorScript":"file:./marketing-optin-block.js","editorStyle":"file:./marketing-optin-block.css"}'),g=(0,l.getCategories)();(0,l.setCategories)([...g,{slug:"mailpoet",title:"MailPoet"}]),(0,l.registerBlockType)(b,{icon:{src:(0,i.jsx)(t,{icon:n}),foreground:"#7f54b3"},attributes:{...b.attributes,...h},edit:function({attributes:{text:e},setAttributes:t}){const o=(0,s.useBlockProps)(),r=e||w;return(0,i.jsx)("div",{...o,children:u?(0,i.jsxs)("div",{className:"wc-block-checkout__marketing",children:[(0,i.jsx)(c.CheckboxControl,{id:"mailpoet-marketing-optin",checked:!1}),(0,i.jsx)(s.RichText,{value:r,onChange:e=>t({text:e})})]}):(0,i.jsx)(f,{})})},save:function(){return(0,i.jsx)("div",{...s.useBlockProps.save()})}})})()})();