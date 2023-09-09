import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
	button.addEventListener("click", () => {
		concatenation(input.value, "hello!");
	});
}

interface Info {
	desc: string;
	isActive: boolean;
}

interface Tags {
	name: string;
	value: number;
}
interface Test {
	userId: number;
	id: number;
	title: string;
	info: Info;
	tags: Tags[];
}
