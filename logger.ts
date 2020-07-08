export interface LogInterface  {
    debug(primaryMessage:string, ...additionalArguments: string[]): void;
    info(primaryMessage:string, ...additionalArguments: string[]): void;
    error(primaryMessage:string, ...additionalArguments: string[]): void;
}

export class Log implements LogInterface {
    debug(message: string, ...additionalArguments: string[]): void {
        this.emitLogMessage("debug", message, additionalArguments);
    }

    info(message: string, ...additionalArguments: string[]): void{
        this.emitLogMessage("info", message, additionalArguments);
    }

    error(message: string, ...additionalArguments: string[]): void{
        this.emitLogMessage("error", message, additionalArguments);
    }

    private emitLogMessage(messageType: "debug" | "info" | "error", message: string, additionalArguments: string[]) {
        message = this.wrapMessageForColour(messageType, message);
        if(additionalArguments.length > 0) {
            console[messageType](message, additionalArguments);
        } else {
            console[messageType](message);
        }
    }

    private wrapMessageForColour(messageType: "debug" | "info" | "error", message: string) {
        let wrappedMessage;
        switch (messageType) {
            case "info":
                wrappedMessage = message;
                break;
            case "debug":
                wrappedMessage = '[35m' + message + '[39m'; // is used for color, it is the ESC key
                break;
            case "error":
                wrappedMessage = '[31m' + message + '[39m';
                break;
        }
        return wrappedMessage;
    }
}