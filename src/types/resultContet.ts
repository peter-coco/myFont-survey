export interface ResultContent {
  mainColor: string;
  logoImage: string;
  fontTitle: React.ReactNode;
  fontCharacter: React.ReactNode;
  fontDescription: React.ReactNode;
  letterTitle: string;
  letter: React.ReactNode;
  letterImage: string;
  likeImageUrl: string;
  likeDescription: React.ReactNode;
  likeLinkUrl: string;
  dislikeImageUrl: string;
  dislikeDescription: React.ReactNode;
  dislikeLinkUrl: string;
  radarData: {
    labels: string[];
    datasets: [
      {
        data: number[];
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
      }
    ];
  };
  resultTag: string[];
}
