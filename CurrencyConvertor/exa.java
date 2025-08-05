class exa {
    public static void main(String args[]) {
        int n=4;
        int idx=1;
        int zig=0;
        int x=0;
        int y=0;
        int mat[][]=new int[n][n];
        
        for(int i=0; i<n; i++) {
            if(zig==0 && i!=0)  {
                x=i;    
                y=0;
                zig=1;
            } else {
                x=0;
                y=i;
                zig=0;
            }
            if(zig==1) {
                for(int j=0; j<=i; j++) {
                    mat[x][y]=idx++;
                    x--;
                    y++;
                }
            } else {
                for(int j=0; j<=i; j++) {
                    mat[x][y]=idx++;
                    x++;
                    y--;
                }
            }
        }

        zig=1;
        x=1;
        y=3;
        for(int i=0; i<1; i++) {
            // if(zig==0)  {
            //     x=i;    
            //     y=0;
            //     zig=1;
            // } else if(i!=0) {
            //     x=0;
            //     y=i;
            //     zig=0;
            // }
            
                for(int j=0; j<3; j++) {
                    mat[x][y]=idx++;
                    x++;
                    y--;
                }
            
            // else {
            //     for(int j=0; j<=i; j++) {
            //         mat[x][y]=idx++;
            //         x--;
            //         y++;
            //     }
            // }
        }

        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                System.out.print(mat[i][j] + " ");
            }
            System.out.println();
        }
    }
}
