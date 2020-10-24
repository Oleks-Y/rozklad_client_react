export interface SubjectDto {
  id: string;
  Name: string;
  teachers: string;
  lessonsZoom: LinkInfo[];
  labsZoom: LinkInfo[];
  isRequired: boolean;
}

export interface LinkInfo {
  url: string;
  accessCode: string;
}
