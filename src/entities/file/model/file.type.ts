export enum FileExtension {
  // Document
  PDF = 'pdf',
  DOC = 'doc',
  DOCX = 'docx',
  XLS = 'xls',
  XLSX = 'xlsx',
  PPT = 'ppt',
  PPTX = 'pptx',
  TXT = 'txt',

  // Code
  RTF = 'rtf',
  CSV = 'csv',
  JSON = 'json',
  XML = 'xml',
  HTML = 'html',
  JS = 'js',
  TS = 'ts',
  TSX = 'tsx',
  JSX = 'jsx',
  MD = 'md',
  MDX = 'mdx',

  // Image
  PNG = 'png',
  JPG = 'jpg',
  JPEG = 'jpeg',
  GIF = 'gif',
  SVG = 'svg',
  WEBP = 'webp',
  ICO = 'ico',
  BMP = 'bmp',
  TIFF = 'tiff',

  // Audio
  MP4 = 'mp4',
  MP3 = 'mp3',
  WAV = 'wav',
  OGG = 'ogg',
  AAC = 'aac',
  FLAC = 'flac',
  WOFF = 'woff',
  WOFF2 = 'woff2',
  TTF = 'ttf',
  EOT = 'eot',
  OTTF = 'otf',

  // Archive
  ZIP = 'zip',
  RAR = 'rar',
  TAR = 'tar',
  GZ = 'gz',
  BZ2 = 'bz2',
  ISO = 'iso',
  DMG = 'dmg',
  EXE = 'exe',
  APP = 'app',
  IPA = 'ipa',
  JAR = 'jar',
  APK = 'apk',

  // Video
  MOV = 'mov',
  AVI = 'avi',
  MKV = 'mkv',
  WEBM = 'webm',
  FLV = 'flv',
  SWF = 'swf',
  WMV = 'wmv',
  MPG = 'mpg',
  MPEG = 'mpeg',
}

export function getMimeType(extension: FileExtension): string {
  switch (extension) {
    // Document
    case FileExtension.PDF:
      return 'application/pdf';
    case FileExtension.DOC:
    case FileExtension.DOCX:
      return 'application/msword';
    case FileExtension.XLS:
    case FileExtension.XLSX:
      return 'application/vnd.ms-excel';
    case FileExtension.PPT:
    case FileExtension.PPTX:
      return 'application/vnd.ms-powerpoint';
    case FileExtension.TXT:
      return 'text/plain';

    // Code
    case FileExtension.RTF:
      return 'application/rtf';
    case FileExtension.CSV:
      return 'text/csv';
    case FileExtension.JSON:
      return 'application/json';
    case FileExtension.XML:
      return 'application/xml';
    case FileExtension.HTML:
      return 'text/html';
    case FileExtension.JS:
    case FileExtension.TS:
    case FileExtension.TSX:
    case FileExtension.JSX:
      return 'application/javascript';
    case FileExtension.MD:
    case FileExtension.MDX:
      return 'text/markdown';

    // Image
    case FileExtension.PNG:
      return 'image/png';
    case FileExtension.JPG:
    case FileExtension.JPEG:
      return 'image/jpeg';
    case FileExtension.GIF:
      return 'image/gif';
    case FileExtension.SVG:
      return 'image/svg+xml';
    case FileExtension.WEBP:
      return 'image/webp';
    case FileExtension.ICO:
      return 'image/x-icon';
    case FileExtension.BMP:
      return 'image/bmp';
    case FileExtension.TIFF:
      return 'image/tiff';

    // Audio
    case FileExtension.MP3:
      return 'audio/mpeg';
    case FileExtension.WAV:
      return 'audio/wav';
    case FileExtension.OGG:
      return 'audio/ogg';
    case FileExtension.AAC:
      return 'audio/aac';
    case FileExtension.FLAC:
      return 'audio/flac';

    // Archive
    case FileExtension.ZIP:
      return 'application/zip';
    case FileExtension.RAR:
      return 'application/x-rar-compressed';
    case FileExtension.TAR:
      return 'application/x-tar';
    case FileExtension.GZ:
      return 'application/gzip';
    case FileExtension.BZ2:
      return 'application/x-bzip2';

    // Video
    case FileExtension.MP4:
      return 'video/mp4';
    case FileExtension.MOV:
      return 'video/quicktime';
    case FileExtension.AVI:
      return 'video/x-msvideo';
    case FileExtension.MKV:
      return 'video/x-matroska';
    case FileExtension.WEBM:
      return 'video/webm';
    case FileExtension.FLV:
      return 'video/x-flv';
    case FileExtension.SWF:
      return 'application/x-shockwave-flash';
    case FileExtension.WMV:
      return 'video/x-ms-wmv';
    case FileExtension.MPG:
    case FileExtension.MPEG:
      return 'video/mpeg';

    default:
      return 'application/octet-stream';
  }
}

export interface IFile {
  id: number;
  object_key: string;
  size: number;
  download_url: string;
  bucket_id: number;
  bucket_name: string;
  extension: FileExtension;
  created_at?: string;
  updated_at?: string;
  owner_id: number;
}
