import { DatasetPage } from "./components/dataset";

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

const fetchData = async (): Promise<DatasetItem[]> => {
	const res = await fetch("http://127.0.0.1:5000/api/dataset");

	if (!res.ok) {
		throw new Error(
			`Erreur lors de la récupération des données: ${res.status}`
		);
	}

	return res.json();
};

const Page: React.FC = async () => {
	const data = await fetchData();
	return <DatasetPage data={data} />;
};

export default Page;
