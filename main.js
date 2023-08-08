const EXCUSES = {
	first: [
		"I have a dental emergency",
		"I have a doctor’s appointment",
		"I have a domestic crisis",
		"I have a family emergency",
		"I have a home inspection",
		"I have a household emergency",
		"I have an important package being delivered",
		"I have an injury",
		"I have jury duty",
		"I have a mental health day",
		"I am pregnancy",
		"I have a religious celebration",
	],
	second: [
		"I have the 24-hour flu",
		"I have car trouble",
		"I have a death in the family",
		"I have a fever (and I’m contagious)",
		"I have irritable bowel syndrome",
		"I am not “100% me” today",
		"I have a sick child or relative",
		"I have a tradespeople appointment",
		"I have road work in my area",
		"I am more productive at home",
		"I need uninterrupted time",
		"I avoid the commute",
		"I'm a loner",
		"I am not a people person",
		"I have a case of the hiccups",
		"I’m an emotional support human",
		"I’m too good at my job (people are getting jealous)",
		"we are keeping the pet therapist bills down",
		"we've misplaced the car keys",
	],
	third: [
		"there are more distractions in the office",
		"there are daycare costs to consider",
		"we don’t live in 1870",
		"there is bad weather",
		"my alarm never went off",
		"our beloved gerbil died",
		"we have a new puppy",
		"there is a parking malfunction",
		"there’s a moose on the highway",
	],
};

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	getExcuse();
});

const getExcuse = () => {
	const yourName = form["your-name"].value;
	const bossesName = form["bosses-name"].value;
	const excuse = document.getElementById("excuse");
	const first = EXCUSES.first[Math.floor(EXCUSES.first.length * Math.random())];
	const second =
		EXCUSES.second[Math.floor(EXCUSES.second.length * Math.random())];
	const third = EXCUSES.third[Math.floor(EXCUSES.third.length * Math.random())];
	excuse.innerText = `Dear ${bossesName},\n\nUnfortunately I won't be able to come to the in-office days due to the fact that ${first}. Also ${second}. There is also the fact that ${third}.\nI hope you understand.\n\nYours sincerly,\n${yourName}`;
};
