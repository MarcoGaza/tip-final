'use strict';

//segment1
window.addEventListener('load', function () {
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/cj-001.appspot.com/o/hero%20(1).jpg?alt=media&token=5c794b13-9c52-4bf4-ba23-f336f8456fce',
    'https://firebasestorage.googleapis.com/v0/b/cj-001.appspot.com/o/img%20(1).jfif?alt=media&token=6d065fc7-904e-4ae0-97f5-1ae143a052b3',
    'https://firebasestorage.googleapis.com/v0/b/cj-001.appspot.com/o/hero-ie%20(1).jpg?alt=media&token=b1f8f3ae-5715-4e03-a112-55fa49fda3ea',
  ];
  let currentImageIndex = 0;
  let u = document.getElementById('maze-canvas'),
    d = u.getContext('2d');
  u.style.position = 'absolute';
  document.body.appendChild(u);
  u.width = window.innerWidth;
  u.height = window.innerHeight;

  function preloadImages(urls, callback) {
    let loadedCounter = 0;
    const imgList = [];
    urls.forEach((url) => {
      const img = new Image();
      img.onload = () => {
        imgList.push(img);
        loadedCounter++;
        if (loadedCounter === urls.length) callback(imgList);
      };
      img.onerror = () => console.error('Failed to load image: ' + img.src);
      img.src = url;
    });
  }

  function loadImageAndMaze() {
    clearCanvas();
    console.log('Loading image:', images[currentImageIndex]);
    const img = new Image();
    img.onload = function () {
      console.log('Image loaded:', img.src);
      d.clearRect(0, 0, u.width, u.height); // Clear the canvas
      d.drawImage(img, 0, 0, u.width, u.height); // Draw the image
      createMaze(); // Draw the maze on top of the image
    };
    img.onerror = function () {
      console.error('Error loading the image');
    };
    img.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }




  function createMaze() {
    //segment4
    function t(t, e) {
      return void 0 === e && ((e = t), (t = 0)), M(t + (e - t) * g());
    }

    //segment5
    function e(t) {
      let e = Array.from(new Array(t).keys());
      return i(e);
    }

    //segment6
    function i(e) {
      let i, s;
      for (let h = e.length - 1; h >= 1; --h) (i = t(0, h + 1)), (s = e[h]), (e[h] = e[i]), (e[i] = s);
      return e;
    }

    //segment7
    function s() {
      let t;
      y = [];
      for (let e = 0; e < p; ++e) {
        y[e] = [];
        for (let i = 0; i < v; ++i) (t = new C(i, e)), (y[e][i] = t);
      }
    }

    //segment8
    function h() {
      function t(t) {
        let e, i;
        t.inMaze = !0;
        for (let s = 0; s < 6; ++s)
          (e = t.neighbour(s)), !1 !== e && ((i = c.indexOf(e)), -1 != i && (c.splice(i, 1), l.push(e)));
      }

      let s,
        h,
        n,
        r,
        o = 0,
        c = [],
        l = [];
      for (
        y.forEach((t) => {
          t.forEach((t) => {
            (t.blocked = [!0, !0, !0, !0, !0, !0]), (t.inMaze = !1), (t.tryOrder = e(6)), c.push(t);
          });
        }),
          i(c),
          s = c.pop(),
          s.depth = 0,
          t(s);
        l.length;

      ) {
        (r = void 0), i(l);
        t: for (let t = l.length - 1; t >= 0; --t) {
          s = l[t];
          for (let e = 0; e < 6; ++e)
            if (((h = s.tryOrder[e]), (n = s.neighbour(h)), n && n.inMaze)) {
              r = t;
              break t;
            }
        }
        if (void 0 === r) throw 'Bug in createMaze : found no possibility';
        (s.blocked[h] = !1),
          (n.blocked[(h + 3) % 6] = !1),
          (s.depth = n.depth + 1),
          s.depth > o && (o = s.depth),
          l.splice(r, 1),
          t(s);
      }
    }

    //segment9

    function n(t, e) {
      (this.cell = t), (this.hue = e), this.mark();
    }

    //segment10

    function r(e, i) {
      void 0 === e && ((e = k / 2), (i = f / 2));
      let s = C.whichHexagon(e, i);
      return (
        s instanceof C &&
        (y.forEach((t) => {
          t.forEach((t) => {
            t.explored = !1;
          });
        }),
        (x = [new n(s, t(360))]),
        !0)
      );
    }

    //segment11

    function o() {
      (k = window.innerWidth), (f = window.innerHeight);
      let t = E((window.innerWidth - k) / 2, 0),
        e = E((window.innerHeight - f) / 2, 0);
      if (
        ((u.style.left = t + 'px'),
        (u.style.top = e + 'px'),
        (u.style.zIndex = 1),
        (u.width = k),
        (u.height = f),
        (d.lineCap = 'round'),
        (v = M((k / a - 0.5) / 1.5)),
        (p = M(f / a / P - 0.5)),
        (v += 3),
        (p += 3),
        !(v <= 3 || p <= 3))
      )
        return (
          C.dimensions(),
          s(),
          h(),
          y.forEach((t) => {
            t.forEach((t) => {
              t.blocked.forEach((e, i) => {
                e && t.drawSide(i);
              });
            });
          }),
          !0
        );
    }

    //segment13

    function l() {
      b.push();
    }

    //segment14

    const a = 5;
    let u,
      d,
      k,
      f,
      v,
      p,
      y,
      x,
      b = [],
      w = {};
    const g = Math.random,
      M = Math.floor,
      m = Math.round,
      E = (Math.ceil, Math.abs, Math.min, Math.max),
      T = Math.PI,
      z = (Math.PI, 2 * Math.PI),
      A = (Math.sin, Math.cos, Math.atan2),
      F = (Math.tan, Math.hypot),
      H = Math.sqrt,
      P = H(3),
      S = P / 2;
    Math.PI;
    let C, I;

    //segment15

    {
      let t, e, i;
      (C = function (t, e) {
        (this.kx = t), (this.ky = e), (this.neighbours = []);
      }),
        (C.dimensions = function () {
          (e = (k - a * (1.5 * v + 0.5)) / 2 + a),
            (i = (f - a * P * (p + 0.5)) / 2 + a * P),
            (t = [[], [], [], [], [], []]),
            (t[3][0] = -(a + 0.5)),
            (t[2][0] = t[4][0] = -(a + 0.5) / 2),
            (t[1][0] = t[5][0] = +(a + 0.5) / 2),
            (t[0][0] = a + 0.5),
            (t[4][1] = t[5][1] = -(a + 0.5) * S),
            (t[0][1] = t[3][1] = 0),
            (t[1][1] = t[2][1] = (a + 0.5) * S);
        }),
        (C.prototype.size = function () {
          (this.xc = e + 1.5 * this.kx * a),
            (this.yc = i + this.ky * a * P),
            1 & this.kx && (this.yc -= a * S),
            (this.vertices = [[], [], [], [], [], []]),
            (this.vertices[3][0] = this.xc + t[3][0]),
            (this.vertices[2][0] = this.vertices[4][0] = this.xc + t[2][0]),
            (this.vertices[1][0] = this.vertices[5][0] = this.xc + t[1][0]),
            (this.vertices[0][0] = this.xc + t[0][0]),
            (this.vertices[4][1] = this.vertices[5][1] = this.yc + t[4][1]),
            (this.vertices[0][1] = this.vertices[3][1] = this.yc + t[0][1]),
            (this.vertices[1][1] = this.vertices[2][1] = this.yc + t[1][1]);
        }),
        (C.prototype.drawHexagon = function (t) {
          this.vertices || this.size();
          let e = d;
          e.beginPath(),
            e.moveTo(this.vertices[0][0], this.vertices[0][1]),
            e.lineTo(this.vertices[1][0], this.vertices[1][1]),
            e.lineTo(this.vertices[2][0], this.vertices[2][1]),
            e.lineTo(this.vertices[3][0], this.vertices[3][1]),
            e.lineTo(this.vertices[4][0], this.vertices[4][1]),
            e.lineTo(this.vertices[5][0], this.vertices[5][1]),
            e.lineTo(this.vertices[0][0], this.vertices[0][1]),
            (e.strokeStyle = 'transparent'),
            (e.lineWidth = 0.5),
            (e.fillStyle = `hsl(55, 100%, ${Math.max(20, 60 - (t % 40))}%)`),
            e.fill();
        }),
        (C.prototype.drawSide = function (t) {
          let e = (t + 1) % 6;
          this.vertices || this.size();
          let i = d;
          i.beginPath(),
            i.moveTo(this.vertices[t][0], this.vertices[t][1]),
            i.lineTo(this.vertices[e][0], this.vertices[e][1]),
            (i.strokeStyle = 'transparent'),
            (i.lineWidth = 0.5),
            i.stroke();
        }),
        (C.prototype.neighbour = function (t) {
          let e = this.neighbours[t];
          return e instanceof C
            ? e
            : !1 !== e &&
                ((e =
                  1 & this.kx
                    ? {
                        kx: this.kx + [1, 0, -1, -1, 0, 1][t],
                        ky: this.ky + [0, 1, 0, -1, -1, -1][t],
                      }
                    : {
                        kx: this.kx + [1, 0, -1, -1, 0, 1][t],
                        ky: this.ky + [1, 1, 1, 0, -1, 0][t],
                      }),
                e.kx < 0 || e.ky < 0 || e.kx >= v || e.ky >= p
                  ? ((this.neighbours[t] = !1), !1)
                  : ((e = y[e.ky][e.kx]), (this.neighbours[t] = e), (e.neighbours[(t + 3) % 6] = this), e));
        }),
        (C.whichHexagon = function (t, s) {
          let h, n, r, o, c;
          (o = m((t - e) / 1.5 / a)), (c = m((s - i) / a / P + 0.5 * (1 & o)));
          let l = e + 1.5 * o * a,
            u = i + c * a * P;
          1 & o && (u -= a * S);
          let d = A(s - u, t - l);
          switch ((d < 0 && (d += z), (d = M((3 * d) / T) % 6), d)) {
            case 0:
              (h = 1.5 * a), (n = S * a);
              break;
            case 1:
              (h = 0), (n = P * a);
              break;
            case 2:
              (h = -1.5 * a), (n = S * a);
              break;
            case 3:
              (h = -1.5 * a), (n = -S * a);
              break;
            case 4:
              (h = 0), (n = -P * a);
              break;
            case 5:
              (h = 1.5 * a), (n = -S * a);
          }
          let k = F(t - l, s - u),
            f = F(t - h - l, s - n - u);
          return (
            f < k &&
              ((r =
                1 & o
                  ? {
                      kx: o + [1, 0, -1, -1, 0, 1][d],
                      ky: c + [0, 1, 0, -1, -1, -1][d],
                    }
                  : {
                      kx: o + [1, 0, -1, -1, 0, 1][d],
                      ky: c + [1, 1, 1, 0, -1, 0][d],
                    }),
              ({ kx: o, ky: c } = r)),
            !(o < 0 || c < 0 || o >= v || c >= p) && y[c][o]
          );
        }),
        (C.prototype.clearHexagon = function () {
          let ctx = d; // Assuming d is the canvas 2D context
          ctx.globalCompositeOperation = 'destination-out'; // Set to remove existing drawing
          ctx.beginPath();
          ctx.moveTo(this.vertices[0][0], this.vertices[0][1]);
          this.vertices.forEach((vertex, index) => {
            if (index > 0) ctx.lineTo(vertex[0], vertex[1]);
          });
          ctx.closePath();
          ctx.fill();
          ctx.globalCompositeOperation = 'source-over'; // Reset the composite operation
        });
    }

    (n.prototype.mark = function () {
      (this.cell.explored = !0), this.cell.drawHexagon(this.hue);
    }),
      //segment17
      (n.prototype.explore = function () {
        let i,
          s,
          h = e(6),
          r = this.cell;
        for (let e = 0; e < 6; ++e) {
          (s = h[e]),
            r.blocked[s] ||
              r.neighbour(s).explored ||
              (i ? x.push(new n(r.neighbour(s), this.hue - 1)) : (i = r.neighbour(s))); // Adjusting 'this.hue - 5' to simulate the effect of changing lightness or hue for gradual change.
        }
        return !!i && ((this.cell = i), this.mark(), !0);
      });

    //segment18

    {
      let t = 0;
      I = function (e) {
        const i = b.shift();
        switch ((window.requestAnimationFrame(I), t)) {
          case 0:
            o() && ++t;
            break;
          case 1:
            r(w.x, w.y) && ++t;
            break;
          case 2:
            if (0 == x.length) {
              ++t;
              break;
            }
            x.forEach((t, e) => {
              t.explore() || x.splice(e, 1);
            });
            break;
          case 3:
            if ('click' !== i) break;
            t = 0;
        }
      };
    }

    //segment19
    u = document.getElementById('mazeCanvas');
    d = u.getContext('2d');
    u.style.position = 'absolute';
    document.body.appendChild(u);
    l();

    I();
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  preloadImages(images, (loadedImages) => {
    loadImageAndMaze(loadedImages);
    setInterval(() => {
      loadImageAndMaze(loadedImages);
    }, 10000); // Change images every 10 seconds
  });
});
