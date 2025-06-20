import "@/styles/tailwind.css";
import React, { type FC } from "react";
import ReactDOM from "react-dom/client";
import { TitleBar } from "@/components/title-bar";
import { cn } from "@/lib/utils";

const App: FC = () => {
	const theme = "catppuccin-mocha";

	return (
		<React.StrictMode>
			<main className={cn(theme, "h-dvh w-dvw grid grid-cols-[200px_1fr] grid-rows-[32px_1fr]")}>
				<TitleBar />
				<div className="bg-sidebar"></div>
				<div className="bg-muted"></div>
			</main>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
