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

export interface IFile {
  id: string;
  name: string;
  size: number;
  download_url: string;
  bucket_id: string;
  extension: FileExtension;
  createdAt?: string;
  updatedAt?: string;
}
