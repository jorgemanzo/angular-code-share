import { CommandOption } from './command-optioin'
export interface BuildOrder {
    dockerFile: string,
    commandOptions: CommandOption[]
}
