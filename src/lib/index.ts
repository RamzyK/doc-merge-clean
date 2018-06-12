export type InputFileRef = string | IFile;
export enum OutputType {
    download,
    url,
    upload,
}
export interface IFile {
    url: string;
    headers?: any;
    verb?: string;
}

export interface IBody {
    type: string;
    data: any;
    schema?: string;
    culture?: string;
    modeleRef: InputFileRef;
    outputFileName?: string;
    outputPath?: string;
    outputType: OutputType;
}
