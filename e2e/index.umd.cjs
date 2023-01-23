(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("vue-router"),require("@headlessui/vue")):typeof define=="function"&&define.amd?define(["exports","vue","vue-router","@headlessui/vue"],e):e((l=typeof globalThis<"u"?globalThis:l||self).PButton={},l.Vue,l.vueRouter,l.vue$1)})(this,function(l,e,f,i){"use strict";const m={class:"text-md px-6 breadcrumbs"},p={class:"font-semibold"},b={__name:"PBreadcrumbs",setup(t){const n=f.useRoute(),{meta:{title:a}}=n;return(s,o)=>(e.openBlock(),e.createElementBlock("div",m,[e.createElementVNode("ul",null,[e.createElementVNode("li",p,e.toDisplayString(e.unref(a)),1)])]))}},v={__name:"PButton",props:{color:{type:String,default:"primary"},size:{type:String,default:"sm"},outline:{type:Boolean,default:!1},wide:{type:Boolean,default:!1},block:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(t){const n=t,{color:a,size:s,outline:o,wide:r,block:c,loading:j}=e.toRefs(n),D=e.computed(()=>({[`btn-${a.value}`]:a.value,[`btn-${s.value}`]:s.value,"btn-outline":o.value,"btn-wide":r.value,"btn-block":c.value,loading:j.value}));return(u,L)=>(e.openBlock(),e.createElementBlock("button",e.mergeProps({class:["btn",e.unref(D)]},u.$attrs),[e.renderSlot(u.$slots,"default")],16))}},d=(t,n)=>{const a=t.__vccOpts||t;for(const[s,o]of n)a[s]=o;return a},y={},g={class:"card card-compact w-full bg-base-100 shadow-xl"},x=e.createElementVNode("figure",{class:"h-2 bg-primary"},null,-1),C={class:"card-body"},h={class:"card-actions justify-end"},w=d(y,[["render",function(t,n){return e.openBlock(),e.createElementBlock("div",g,[e.renderSlot(t.$slots,"header",{},()=>[x]),e.createElementVNode("div",C,[e.renderSlot(t.$slots,"default"),e.createElementVNode("div",h,[e.renderSlot(t.$slots,"card-actions")])])])}]]),N=d({setup(){const t=e.reactive({count:0});return{...e.toRefs(t)}}},[["render",function(t,n,a,s,o,r){return e.openBlock(),e.createElementBlock("div")}]]),E={setup(){const t=e.reactive({count:0});return{...e.toRefs(t)}}},V={class:"w-full h-full pl-24 fixed border-t-2 z-10 bg-base-100 dark:bg-gray-800"},B=[e.createElementVNode("div",{role:"status",class:"top-1/2 left-1/3"},[e.createElementVNode("svg",{"aria-hidden":"true",class:"w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.createElementVNode("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),e.createElementVNode("span",{class:"sr-only"},"Loading...")],-1)],k=d(E,[["render",function(t,n,a,s,o,r){return e.openBlock(),e.createElementBlock("div",V,B)}]]),_=e.createElementVNode("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),P={class:"fixed inset-0 overflow-y-auto"},T={class:"flex min-h-full items-center justify-center p-4 text-center"},S={class:"flex flex-col"},$={class:"mt-4 max-h-96 overflow-scroll"},M={class:"mt-4 max-h-16 row justify-between items-start self-end gap-2"},I={__name:"PModal",props:{show:{type:Boolean,default:!0},title:{type:String,default:"Modal Title"}},setup(t){const n=t,{show:a,title:s}=e.toRefs(n);return(o,r)=>(e.openBlock(),e.createBlock(e.unref(i.TransitionRoot),{appear:"",show:e.unref(a),as:"template"},{default:e.withCtx(()=>[e.createVNode(e.unref(i.Dialog),{as:"div",onClose:r[2]||(r[2]=c=>o.$emit("close")),class:"relative z-10"},{default:e.withCtx(()=>[e.createVNode(e.unref(i.TransitionChild),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:e.withCtx(()=>[_]),_:1}),e.createElementVNode("div",P,[e.createElementVNode("div",T,[e.createVNode(e.unref(i.TransitionChild),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:e.withCtx(()=>[e.createVNode(e.unref(i.DialogPanel),{class:"flex flex-col justify-around gap-10 w-full max-w-4xl transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all"},{default:e.withCtx(()=>[e.createElementVNode("div",S,[e.createVNode(e.unref(i.DialogTitle),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(s)),1)]),_:1}),e.createElementVNode("div",$,[e.renderSlot(o.$slots,"default")])]),e.renderSlot(o.$slots,"modal-footer",{},()=>[e.createElementVNode("div",M,[e.createElementVNode("button",{class:"btn bg-base-200 text-black hover:bg-base-300 btn-small",type:"button",onClick:r[0]||(r[0]=c=>o.$emit("close"))}," Close "),e.createElementVNode("button",{class:"btn btn-primary ml-2 -py-8 small",type:"button",onClick:r[1]||(r[1]=c=>o.$emit("close"))}," Confirm ")])])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"]))}},R=Object.freeze(Object.defineProperty({__proto__:null,states:{INIT:"INIT",LOADING:"LOADING",EMPTY:"EMPTY",FILTER:"FILTER"}},Symbol.toStringTag,{value:"Module"}));l.PBreadcrumbs=b,l.PButton=v,l.PCard=w,l.PInput=N,l.PLoading=k,l.PModal=I,l.constants=R,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});