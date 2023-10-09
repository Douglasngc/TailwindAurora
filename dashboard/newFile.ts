import { sidebarOpen, openSidebar, closeSidebar } from "./store";

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const toggleSidebar = () => {
if (sidebarOpen.value) {
closeSidebar();
} else {
openSidebar();
}
};

const __VLS_componentsOption = {};

let __VLS_name!: 'TopBar';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
({} as __VLS_IntrinsicElements).header; ({} as __VLS_IntrinsicElements).header;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).img;
({} as __VLS_IntrinsicElements).svg; ({} as __VLS_IntrinsicElements).svg;
({} as __VLS_IntrinsicElements).path;
({} as __VLS_IntrinsicElements).input;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["header"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).header;
({} as __VLS_IntrinsicElements).header;
const __VLS_2 = __VLS_1({ ...{}, class: ("z-30 relative h-16 w-full items-center bg-white shadow md:h-20"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("z-30 relative h-16 w-full items-center bg-white shadow md:h-20"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_7 = __VLS_6({ ...{}, class: ("mx-auto w-full flex justify-between items-center px-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("mx-auto w-full flex justify-between items-center px-3"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_12 = __VLS_11({ ...{}, class: ("relative flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("relative flex items-center"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_17 = __VLS_16({ ...{ onClick: {} as any, }, type: ("button"), "aria-expanded": ("false"), "aria-label": ("Toggle sidenav"), class: ("text-4xl text-gray-500 focus:outline-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), "aria-expanded": ("false"), "aria-label": ("Toggle sidenav"), class: ("text-4xl text-gray-500 focus:outline-none"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_17>).onClick) };
__VLS_20 = {
click: (__VLS_ctx.toggleSidebar)
};
(__VLS_18.slots!).default;
}
{
const __VLS_21 = ({} as __VLS_IntrinsicElements)["img"];
const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
({} as __VLS_IntrinsicElements).img;
const __VLS_23 = __VLS_22({ ...{}, class: ("h-10 ml-4"), src: ("https://a.imagem.app/ok70aJ.png"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, class: ("h-10 ml-4"), src: ("https://a.imagem.app/ok70aJ.png"), alt: (""), });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
}
(__VLS_13.slots!).default;
}
{
const __VLS_26 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_28 = __VLS_27({ ...{}, class: ("relative flex items-center w-full max-w-md mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ("relative flex items-center w-full max-w-md mx-auto"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
{
const __VLS_31 = ({} as __VLS_IntrinsicElements)["svg"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
({} as __VLS_IntrinsicElements).svg;
({} as __VLS_IntrinsicElements).svg;
const __VLS_33 = __VLS_32({ ...{}, class: ("pointer-events-none absolute left-0 ml-4 h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block"), xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 20 20"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, class: ("pointer-events-none absolute left-0 ml-4 h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block"), xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 20 20"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
{
const __VLS_36 = ({} as __VLS_IntrinsicElements)["path"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
({} as __VLS_IntrinsicElements).path;
const __VLS_38 = __VLS_37({ ...{}, d: ("M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, d: ("M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
}
(__VLS_34.slots!).default;
}
{
const __VLS_41 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
({} as __VLS_IntrinsicElements).input;
const __VLS_43 = __VLS_42({ ...{}, type: ("text"), class: ("block w-full rounded-md bg-gray-100 py-1.5 pl-10 pr-4 text-gray-400 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"), placeholder: ("Search"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, type: ("text"), class: ("block w-full rounded-md bg-gray-100 py-1.5 pl-10 pr-4 text-gray-400 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"), placeholder: ("Search"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
}
{
const __VLS_46 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_48 = __VLS_47({ ...{}, class: ("absolute right-0 mr-2 hidden h-auto rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-400 md:block"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: ("absolute right-0 mr-2 hidden h-auto rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-400 md:block"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
(__VLS_49.slots!).default;
}
(__VLS_29.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[toggleSidebar,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
toggleSidebar: toggleSidebar as typeof toggleSidebar,
};
},
});
return (await import('vue')).defineComponent({
setup() {
return {};
},
// Propriedades, métodos e lógica do componente
});
})();
