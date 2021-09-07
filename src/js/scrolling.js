import { refs } from "./refs";

export default async function scrollIntoView() {
    refs.gallery.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}