export default async function importErrorHandler() {
    let module = await import(/* webpackChunkName: "errorHandler" */ /* webpackMode: "lazy" */'./errorHandler.js');
    return module.default;
}