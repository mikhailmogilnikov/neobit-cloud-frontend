import {
  PiFile,
  PiFileAudio,
  PiFileCode,
  PiFileDoc,
  PiFileImage,
  PiFileVideo,
  PiFileZip,
} from 'react-icons/pi';

import { FileExtension } from '../model/file.type';

export enum FileTypes {
  DOCUMENT = 'document',
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  ARCHIVE = 'archive',
  OTHER = 'other',
  CODE = 'code',
}

export const FileIcons = {
  [FileTypes.DOCUMENT]: PiFileDoc,
  [FileTypes.IMAGE]: PiFileImage,
  [FileTypes.AUDIO]: PiFileAudio,
  [FileTypes.VIDEO]: PiFileVideo,
  [FileTypes.ARCHIVE]: PiFileZip,
  [FileTypes.OTHER]: PiFile,
  [FileTypes.CODE]: PiFileCode,
};

export const getFileIcon = (extension: FileExtension) => {
  switch (extension) {
    case FileExtension.PDF:
    case FileExtension.DOC:
    case FileExtension.DOCX:
    case FileExtension.XLS:
    case FileExtension.XLSX:
    case FileExtension.PPT:
    case FileExtension.PPTX:
    case FileExtension.TXT:
      return FileIcons[FileTypes.DOCUMENT];
    case FileExtension.RTF:
    case FileExtension.CSV:
    case FileExtension.JSON:
    case FileExtension.XML:
    case FileExtension.HTML:
    case FileExtension.JS:
    case FileExtension.TS:
    case FileExtension.TSX:
    case FileExtension.JSX:
    case FileExtension.MD:
    case FileExtension.MDX:
      return FileIcons[FileTypes.CODE];
    case FileExtension.MP3:
    case FileExtension.WAV:
    case FileExtension.OGG:
    case FileExtension.AAC:
    case FileExtension.FLAC:
      return FileIcons[FileTypes.AUDIO];
    case FileExtension.JPEG:
    case FileExtension.JPG:
    case FileExtension.PNG:
    case FileExtension.GIF:
    case FileExtension.BMP:
    case FileExtension.TIFF:
    case FileExtension.ICO:
    case FileExtension.WEBP:
      return FileIcons[FileTypes.IMAGE];
    case FileExtension.MP4:
    case FileExtension.MOV:
    case FileExtension.AVI:
    case FileExtension.MKV:
    case FileExtension.WEBM:
    case FileExtension.FLV:
    case FileExtension.SWF:
    case FileExtension.WMV:
    case FileExtension.MPG:
    case FileExtension.MPEG:
      return FileIcons[FileTypes.VIDEO];
    case FileExtension.ZIP:
    case FileExtension.RAR:
    case FileExtension.TAR:
    case FileExtension.GZ:
    case FileExtension.BZ2:
      return FileIcons[FileTypes.ARCHIVE];
    default:
      return FileIcons[FileTypes.OTHER];
  }
};
