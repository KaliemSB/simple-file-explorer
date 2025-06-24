import { ArrowLeft, ArrowRight, Computer, RefreshCw, Search } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Navbar: FC = () => {
	return (
		<div className="flex gap-2 p-2">
			<Button variant="outline" size="icon">
				<ArrowLeft />
			</Button>
			<Button variant="outline" size="icon">
				<ArrowRight />
			</Button>
			<Button variant="outline" size="icon">
				<RefreshCw />
			</Button>
			<div className="flex gap-2 w-full">
				<div className="relative w-[60%]">
					<Input type="text" className="pl-8" defaultValue="/home/kaliem" />
					<Computer className="pointer-events-none absolute left-2.5 top-1/2 size-[16px] -translate-y-1/2" />
				</div>
				<div className="relative w-[40%]">
					<Input type="text" className="pl-8" placeholder="Search..." defaultValue="" />
					<Search className="pointer-events-none absolute left-2.5 top-1/2 size-[16px] -translate-y-1/2" />
				</div>
			</div>
		</div>
	);
};
