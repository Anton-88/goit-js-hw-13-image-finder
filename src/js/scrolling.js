import { refs } from "./refs";

export default function scrollIntoView() {
    refs.gallery.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}