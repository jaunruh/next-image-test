import '../app/globals.scss'
import Link from "next/link";

export default function ErrorPage() {
	return (
			<div className="h-screen flex flex-col justify-center text-center gap-y-12">
				<div className="my-0 mx-auto text-lg font-semibold text-coding w-[60%]">
					This Page does not seem to exist.
				</div>

				<Link className="text-xl font-bold text-primary" href="/">Bring me Back</Link>
			</div>
	)
}