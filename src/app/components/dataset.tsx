"use client";

import React, { useEffect, useState } from "react";

interface DatasetItem {
	Quality1: number;
	Quality2: number;
	Quality3: number;
	"Small Bags": number;
	"Large Bags": number;
	"XLarge Bags": number;
	year: number;
	type: string;
	region: string;
}

interface DatasetPageProps {
	data: DatasetItem[];
}

export const DatasetPage: React.FC<DatasetPageProps> = ({ data }) => {
	const [dataset] = useState<DatasetItem[]>(data);

	useEffect(() => {}, []);

	return (
		<div className="bg-dark text-light p-5 rounded-5">
			<h1 className="text-center">Dataset</h1>
			<table>
				<thead>
					<tr>
						<th>Quality1</th>
						<th>Quality2</th>
						<th>Quality3</th>
						<th>Small Bags</th>
						<th>Large Bags</th>
						<th>XLarge Bags</th>
						<th>Year</th>
						<th>Type</th>
						<th>Region</th>
					</tr>
				</thead>
				<tbody>
					{dataset.map((item, index) => (
						<tr key={index}>
							<td>{item.Quality1}</td>
							<td>{item.Quality2}</td>
							<td>{item.Quality3}</td>
							<td>{item["Small Bags"]}</td>
							<td>{item["Large Bags"]}</td>
							<td>{item["XLarge Bags"]}</td>
							<td>{item.year}</td>
							<td>{item.type}</td>
							<td>{item.region}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
