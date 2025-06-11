// Default export: checks if age is 18 or older
export default function isAdult(age) {
  return age >= 18 ? "Yes, adult" : "No, not an adult";
}


export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning!";
  if (hour < 18) return "Good afternoon!";
  return "Good evening!";
}
