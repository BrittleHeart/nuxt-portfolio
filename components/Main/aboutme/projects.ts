import IProject from '@/interfaces/IProject'

export const projects: IProject[] = [
	{
		id: 1,
		name: 'Cocinerojs',
		description: `
      Opracowany przeze mnie framework JavaScript’u oraz NodeJS’a. 
      Pozwola on na tworzenie dużych projektów jak i małych przedsięwziąć. 
      Co więcej, dzięki temu, że został napisany w całości z użyciem Typescript’u, 
      pisanie czystego i przyjemnego dla oka kodu jest jeszcze prostsze.`,
		project_status: 'preparing',
		targetable: true,
		project_url: 'https://github.com/BrittleHeart/Cocinerojs'
	},
	{
		id: 2,
		name: 'Express Template',
		description: `
      Prosty express template, pozwalający na pisanie prostych szybkich REST API. Projekt napisany w całości z użyciem składni ES6, NodeJS. Jego prostota polega na tym, że nie istnieje potrzeba konfigowania serwera za każdym razem, gdy chcemy sworzyć nowy, prosty projekt.`,
		project_status: 'done',
		targetable: true,
		project_url: 'https://github.com/BrittleHeart/express-template'
	},
	{
		id: 3,
		name: 'ZZMW RUDA EU',
		description: `
      Projekt realizowany na zlecenie klienta - Byłego Przewodniczącego Zwiazków Zawodowych Maszynistów Wyciągowych Kopalń w Polsce, przy KWK Ruda “Ruch” Bielszowice. Jest to strona informacyjna przeznaczona dla członków wyżej wymienionego Związku Zawodowego.`,
		project_status: 'done',
		targetable: true,
		project_url: 'https://gitlab.com/BrittleHeart/zzmwruda_react'
	},
	{
		id: 4,
		name: '#StaySecure',
		description: `
      Projekt tworzony z myślą o ludziach. Jego głównym przeznaczeniem jest ochrona jednostek nie posiadających wiedzy z zakresu bezpieczeństwa sieciowego oraz ochrony przed zagrożeniami w internecie. Jest to projekt czysto hobbystyczny non profit.`,
		project_status: 'preparing',
		targetable: true,
		project_url:
			'https://www.facebook.com/Bartosz-Pazdur-StaySecure-100172148250394'
	}
]

/**
 * Sets status label for project
 *
 * Labels:
 *  - done
 *  - preparing
 *
 * @return void
 */
export function setProjectStatusLabel(): void {
	const labelsStatus = document.querySelectorAll('[data-status]')

	labelsStatus.forEach((label: Element) => {
		// @ts-ignore
		const labelStatus: string = label.attributes['data-status'].value

		switch (labelStatus) {
			case 'done':
				label.setAttribute('style', 'background-color: #76FF03;')
				break
			case 'preparing':
				label.setAttribute('style', 'background-color: #FFEB3B;')
				break
		}
	})
}
