export interface ShareOnSocialProps {
  children: any;
  backdropColor?: string;
  closeText?: string;
  copyToClipboardText?: string;
  copySuccessText?: string;
  shareTo: Array<string>;
  textToShare: string;
  link: string;
  linkTitle: string;
  linkMetaDesc?: string;
  linkFavicon?: string;
  openInWindow?: boolean;
  noReferer?: boolean;
  onSocialClick?: () => void;
}

export interface ShareData {
  textToShare: string;
  link: string;
  linkTitle: string;
  linkMetaDesc?: string;
  linkFavicon?: string;
}

export interface PopupProps {
  onClose;
  closeText?: string;
  copyToClipboardText?: string;
  copySuccessText?: string;
  shareTo: Array<string>;
  shareData: ShareData;
  onClick?;
  openInWindow?: boolean;
  noReferer?: boolean;
  fadeClass: string;
}

export interface IconProps {
  onClose;
  id: string;
  shareData: ShareData;
  onClick?;
  openInWindow?: boolean;
  noReferer?: boolean;
}
