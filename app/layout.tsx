import './globals.scss'

import euclid from "./font";
import React from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
			<html lang="en" className={euclid.className}>
				{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
				<head/>
				<body className="text-center text-very-dark-grey">
					<main className="flex flex-col justify-around" style={{minHeight: "var(--body-wrapper-min-height)"}}>
						{children}
					</main>
				</body>
			</html>
	)
}
