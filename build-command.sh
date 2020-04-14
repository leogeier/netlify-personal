if [ -d powernap ]; then
  cd powernap
  git pull
else
  git clone https://github.com/leogeier/powernap.git
fi
