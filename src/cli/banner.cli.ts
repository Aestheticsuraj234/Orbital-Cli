import figlet from 'figlet';
import boxen from 'boxen';
import chalk from 'chalk';


export function renderBanner(){
    const title = figlet.textSync("Orbital" , {horizontalLayout:"fitted"});
    const subtitle = `${chalk.red("Gemini-powered")} ${chalk.gray('•')} ${chalk.yellowBright("CLI Based AI")}`

    const content = `${title}\n${subtitle}`;

    const boxed = boxen(content , {
        padding:1,
        margin:1,
        borderColor:"cyan",
        borderStyle:"round"
    });

    console.log(boxed)
}