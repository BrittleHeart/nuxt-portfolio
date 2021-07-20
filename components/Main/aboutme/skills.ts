import ISkill from '@/interfaces/ISkill'

/**
 * List of skills
 *
 * @TODO In the future, save this data to database
 * @param { ISkill } skills
 */
export const skills: ISkill[] = [
	{
		id: 1,
		name: 'HTML, CSS i JavaScript(Vanilla)',
		percentage: 90
	},
	{
		id: 2,
		name: 'Środowisko uruchomieniowe NodeJS',
		percentage: 90
	},
	{
		id: 3,
		name: 'JAM Stack',
		percentage: 80
	},
	{
		id: 4,
		name: 'MEVN | MERN | MEAN Stack',
		percentage: 80
	},
	{
		id: 5,
		name: 'Wordpress',
		percentage: 30
	},
	{
		id: 6,
		name: 'GIT',
		percentage: 60
	}
]

/**
 * Sets skill percentage for width of element's attribute
 *
 * @return void
 */
export function setSkillPercentage(): void {
	const skillPercentage = document.querySelectorAll('[data-percentage]')

	skillPercentage.forEach((element: Element) => {
		// @ts-ignore
		const elementWidth = element.attributes['data-percentage'].value

		element.setAttribute('style', `width: ${elementWidth}%`)
	})
}
