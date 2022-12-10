{ pkgs }: {
	deps = [
		pkgs.killall
  pkgs.nodejs-18_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.yarn
        pkgs.replitPackages.jest
	];
}