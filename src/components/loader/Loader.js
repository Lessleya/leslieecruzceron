import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSpring, animated, config } from 'react-spring';

const Loader = () => {
  const boxProps = useSpring({
    to: { transform: 'scale(1.2)' },
    from: { transform: 'scale(1)' },
    config: { ...config.default, duration: 1000 }, // Adjust duration as needed
    reset: true,
    loop: { reverse: true },
  });
  return (
    <Box
      bg="pink.300"
      style={{
        height: '100vh',
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <animated.div style={boxProps}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsxlink="http://www.w3.org/1999/xlink"
          width="300"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="300"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <g />
            <clipPath id="bdd7047b35">
              <path
                d="M 70.578125 103.828125 L 139 103.828125 L 139 181.554688 L 70.578125 181.554688 Z M 70.578125 103.828125 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="671ff39e35">
              <path
                d="M 236 103.828125 L 304.414062 103.828125 L 304.414062 181.554688 L 236 181.554688 Z M 236 103.828125 "
                clip-rule="nonzero"
              />
            </clipPath>
          </defs>
          <path
            fill="#ffdae0"
            d="M 225.328125 129.789062 C 225.328125 130.039062 225.328125 130.582031 225.328125 130.582031 C 225.183594 149.484375 187.492188 175.300781 187.492188 175.300781 C 187.492188 175.300781 182.503906 171.878906 176.140625 166.621094 C 195.371094 155.199219 208.269531 134.246094 208.339844 110.273438 C 217.929688 111.589844 225.328125 119.828125 225.328125 129.789062 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#f6e5f0"
            d="M 208.339844 110.273438 C 208.269531 134.246094 195.371094 155.199219 176.140625 166.621094 C 171.480469 162.769531 166.085938 157.925781 161.394531 152.714844 C 174.875 148.097656 185.058594 136.390625 187.492188 122.042969 C 190.5 115.023438 197.488281 110.085938 205.625 110.085938 C 206.550781 110.085938 207.453125 110.148438 208.339844 110.273438 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#ffffff"
            d="M 187.492188 122.042969 C 185.058594 136.390625 174.875 148.097656 161.394531 152.714844 C 154.875 145.5 149.699219 137.570312 149.660156 130.582031 C 149.660156 130.582031 149.660156 130.039062 149.660156 129.789062 C 149.660156 118.90625 158.480469 110.085938 169.363281 110.085938 C 177.5 110.085938 184.488281 115.023438 187.492188 122.042969 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <g clip-path="url(#bdd7047b35)">
            <path
              fill="#ffffff"
              d="M 136.792969 173.195312 C 119.433594 163.171875 84.214844 142.839844 83.960938 142.691406 C 99.089844 133.960938 134.308594 113.625 136.792969 112.191406 C 141.777344 109.3125 137.277344 101.578125 132.277344 104.464844 C 114.917969 114.484375 97.558594 124.507812 80.203125 134.527344 C 77.71875 135.960938 75.238281 137.394531 72.753906 138.828125 C 69.851562 140.503906 69.851562 144.878906 72.753906 146.554688 C 90.109375 156.578125 129.792969 179.488281 132.277344 180.921875 C 137.273438 183.804688 141.785156 176.074219 136.792969 173.195312 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <g clip-path="url(#671ff39e35)">
            <path
              fill="#ffffff"
              d="M 302.234375 138.828125 C 284.878906 128.808594 245.195312 105.898438 242.710938 104.464844 C 237.71875 101.578125 233.207031 109.308594 238.195312 112.191406 C 255.554688 122.210938 290.773438 142.546875 291.027344 142.691406 C 275.902344 151.425781 240.679688 171.761719 238.195312 173.195312 C 233.210938 176.074219 237.710938 183.808594 242.710938 180.921875 C 260.070312 170.898438 299.753906 147.988281 302.234375 146.554688 C 305.136719 144.878906 305.136719 140.503906 302.234375 138.828125 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(64.227719, 254.568821)">
              <g>
                <path d="M 3.171875 0 L 3.171875 -30.46875 L 9.09375 -30.46875 L 9.09375 -5.1875 L 24.625 -5.1875 L 24.625 0 Z M 3.171875 0 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(94.853757, 254.568821)">
              <g>
                <path d="M 13 0.421875 C 11.164062 0.421875 9.519531 0.113281 8.0625 -0.5 C 6.601562 -1.113281 5.363281 -1.960938 4.34375 -3.046875 C 3.332031 -4.128906 2.554688 -5.367188 2.015625 -6.765625 C 1.472656 -8.171875 1.203125 -9.648438 1.203125 -11.203125 C 1.203125 -12.773438 1.472656 -14.257812 2.015625 -15.65625 C 2.554688 -17.0625 3.332031 -18.304688 4.34375 -19.390625 C 5.363281 -20.484375 6.601562 -21.335938 8.0625 -21.953125 C 9.519531 -22.566406 11.164062 -22.875 13 -22.875 C 14.832031 -22.875 16.46875 -22.566406 17.90625 -21.953125 C 19.351562 -21.335938 20.59375 -20.484375 21.625 -19.390625 C 22.65625 -18.304688 23.429688 -17.0625 23.953125 -15.65625 C 24.484375 -14.257812 24.75 -12.773438 24.75 -11.203125 C 24.75 -9.648438 24.484375 -8.171875 23.953125 -6.765625 C 23.429688 -5.367188 22.660156 -4.128906 21.640625 -3.046875 C 20.628906 -1.960938 19.394531 -1.113281 17.9375 -0.5 C 16.476562 0.113281 14.832031 0.421875 13 0.421875 Z M 7.125 -11.203125 C 7.125 -9.878906 7.378906 -8.707031 7.890625 -7.6875 C 8.410156 -6.675781 9.113281 -5.882812 10 -5.3125 C 10.882812 -4.75 11.882812 -4.46875 13 -4.46875 C 14.082031 -4.46875 15.066406 -4.757812 15.953125 -5.34375 C 16.847656 -5.925781 17.554688 -6.722656 18.078125 -7.734375 C 18.609375 -8.753906 18.875 -9.921875 18.875 -11.234375 C 18.875 -12.523438 18.609375 -13.6875 18.078125 -14.71875 C 17.554688 -15.75 16.847656 -16.550781 15.953125 -17.125 C 15.066406 -17.695312 14.082031 -17.984375 13 -17.984375 C 11.882812 -17.984375 10.882812 -17.6875 10 -17.09375 C 9.113281 -16.507812 8.410156 -15.707031 7.890625 -14.6875 C 7.378906 -13.675781 7.125 -12.515625 7.125 -11.203125 Z M 7.125 -11.203125 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(126.423384, 254.568821)">
              <g>
                <path d="M 1.078125 -6.65625 C 1.078125 -8.113281 1.484375 -9.390625 2.296875 -10.484375 C 3.109375 -11.585938 4.242188 -12.4375 5.703125 -13.03125 C 7.160156 -13.632812 8.835938 -13.9375 10.734375 -13.9375 C 11.671875 -13.9375 12.625 -13.863281 13.59375 -13.71875 C 14.570312 -13.582031 15.414062 -13.359375 16.125 -13.046875 L 16.125 -14.25 C 16.125 -15.675781 15.703125 -16.773438 14.859375 -17.546875 C 14.015625 -18.316406 12.765625 -18.703125 11.109375 -18.703125 C 9.878906 -18.703125 8.707031 -18.488281 7.59375 -18.0625 C 6.476562 -17.632812 5.304688 -17.003906 4.078125 -16.171875 L 2.234375 -19.953125 C 3.722656 -20.921875 5.242188 -21.648438 6.796875 -22.140625 C 8.359375 -22.628906 10 -22.875 11.71875 -22.875 C 14.914062 -22.875 17.40625 -22.070312 19.1875 -20.46875 C 20.976562 -18.863281 21.875 -16.570312 21.875 -13.59375 L 21.875 -6.4375 C 21.875 -5.832031 21.984375 -5.398438 22.203125 -5.140625 C 22.421875 -4.890625 22.769531 -4.734375 23.25 -4.671875 L 23.25 0 C 22.738281 0.0820312 22.273438 0.148438 21.859375 0.203125 C 21.441406 0.265625 21.09375 0.296875 20.8125 0.296875 C 19.664062 0.296875 18.796875 0.0390625 18.203125 -0.46875 C 17.617188 -0.988281 17.257812 -1.617188 17.125 -2.359375 L 16.984375 -3.515625 C 16.015625 -2.253906 14.800781 -1.28125 13.34375 -0.59375 C 11.882812 0.0820312 10.394531 0.421875 8.875 0.421875 C 7.394531 0.421875 6.0625 0.113281 4.875 -0.5 C 3.6875 -1.113281 2.753906 -1.957031 2.078125 -3.03125 C 1.410156 -4.101562 1.078125 -5.3125 1.078125 -6.65625 Z M 15.0625 -5.484375 C 15.375 -5.828125 15.628906 -6.171875 15.828125 -6.515625 C 16.023438 -6.859375 16.125 -7.175781 16.125 -7.46875 L 16.125 -9.734375 C 15.445312 -10.023438 14.707031 -10.25 13.90625 -10.40625 C 13.101562 -10.5625 12.34375 -10.640625 11.625 -10.640625 C 10.132812 -10.640625 8.910156 -10.316406 7.953125 -9.671875 C 6.992188 -9.023438 6.515625 -8.175781 6.515625 -7.125 C 6.515625 -6.550781 6.671875 -6.003906 6.984375 -5.484375 C 7.304688 -4.972656 7.765625 -4.5625 8.359375 -4.25 C 8.960938 -3.9375 9.679688 -3.78125 10.515625 -3.78125 C 11.367188 -3.78125 12.207031 -3.941406 13.03125 -4.265625 C 13.863281 -4.597656 14.539062 -5.003906 15.0625 -5.484375 Z M 15.0625 -5.484375 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(156.620512, 254.568821)">
              <g>
                <path d="M 1.25 -11.234375 C 1.25 -13.410156 1.675781 -15.378906 2.53125 -17.140625 C 3.382812 -18.898438 4.566406 -20.296875 6.078125 -21.328125 C 7.597656 -22.359375 9.332031 -22.875 11.28125 -22.875 C 12.9375 -22.875 14.429688 -22.460938 15.765625 -21.640625 C 17.097656 -20.828125 18.132812 -19.789062 18.875 -18.53125 L 18.875 -31.328125 L 24.625 -31.328125 L 24.625 -6.4375 C 24.625 -5.832031 24.722656 -5.398438 24.921875 -5.140625 C 25.128906 -4.890625 25.472656 -4.734375 25.953125 -4.671875 L 25.953125 0 C 24.953125 0.195312 24.140625 0.296875 23.515625 0.296875 C 22.484375 0.296875 21.628906 0.0390625 20.953125 -0.46875 C 20.285156 -0.988281 19.910156 -1.660156 19.828125 -2.484375 L 19.734375 -3.90625 C 18.910156 -2.5 17.789062 -1.425781 16.375 -0.6875 C 14.957031 0.0507812 13.472656 0.421875 11.921875 0.421875 C 10.378906 0.421875 8.957031 0.125 7.65625 -0.46875 C 6.351562 -1.070312 5.222656 -1.898438 4.265625 -2.953125 C 3.304688 -4.015625 2.5625 -5.253906 2.03125 -6.671875 C 1.507812 -8.085938 1.25 -9.609375 1.25 -11.234375 Z M 18.875 -8.234375 L 18.875 -13.59375 C 18.59375 -14.425781 18.132812 -15.171875 17.5 -15.828125 C 16.875 -16.484375 16.175781 -17.003906 15.40625 -17.390625 C 14.632812 -17.785156 13.863281 -17.984375 13.09375 -17.984375 C 12.195312 -17.984375 11.390625 -17.796875 10.671875 -17.421875 C 9.960938 -17.046875 9.34375 -16.539062 8.8125 -15.90625 C 8.289062 -15.28125 7.890625 -14.550781 7.609375 -13.71875 C 7.335938 -12.894531 7.203125 -12.023438 7.203125 -11.109375 C 7.203125 -10.191406 7.351562 -9.328125 7.65625 -8.515625 C 7.957031 -7.703125 8.394531 -6.992188 8.96875 -6.390625 C 9.539062 -5.785156 10.203125 -5.3125 10.953125 -4.96875 C 11.710938 -4.632812 12.535156 -4.46875 13.421875 -4.46875 C 13.972656 -4.46875 14.523438 -4.554688 15.078125 -4.734375 C 15.640625 -4.921875 16.171875 -5.175781 16.671875 -5.5 C 17.171875 -5.832031 17.613281 -6.234375 18 -6.703125 C 18.382812 -7.179688 18.675781 -7.691406 18.875 -8.234375 Z M 18.875 -8.234375 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(189.862873, 254.568821)">
              <g>
                <path d="M 2.625 0 L 2.625 -22.484375 L 8.359375 -22.484375 L 8.359375 0 Z M 2.625 -25.609375 L 2.625 -31.328125 L 8.359375 -31.328125 L 8.359375 -25.609375 Z M 2.625 -25.609375 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(206.377875, 254.568821)">
              <g>
                <path d="M 23.515625 0 L 17.765625 0 L 17.765625 -12.609375 C 17.765625 -14.410156 17.445312 -15.726562 16.8125 -16.5625 C 16.1875 -17.394531 15.316406 -17.8125 14.203125 -17.8125 C 13.429688 -17.8125 12.648438 -17.609375 11.859375 -17.203125 C 11.078125 -16.804688 10.367188 -16.253906 9.734375 -15.546875 C 9.109375 -14.847656 8.648438 -14.039062 8.359375 -13.125 L 8.359375 0 L 2.625 0 L 2.625 -22.484375 L 7.8125 -22.484375 L 7.8125 -18.328125 C 8.382812 -19.296875 9.113281 -20.113281 10 -20.78125 C 10.882812 -21.457031 11.90625 -21.972656 13.0625 -22.328125 C 14.21875 -22.691406 15.441406 -22.875 16.734375 -22.875 C 18.128906 -22.875 19.273438 -22.625 20.171875 -22.125 C 21.078125 -21.625 21.765625 -20.945312 22.234375 -20.09375 C 22.710938 -19.25 23.046875 -18.296875 23.234375 -17.234375 C 23.421875 -16.179688 23.515625 -15.113281 23.515625 -14.03125 Z M 23.515625 0 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(237.861725, 254.568821)">
              <g>
                <path d="M 11.40625 0.125 C 9.925781 0.125 8.5625 -0.164062 7.3125 -0.75 C 6.070312 -1.332031 5 -2.15625 4.09375 -3.21875 C 3.195312 -4.28125 2.503906 -5.492188 2.015625 -6.859375 C 1.523438 -8.234375 1.28125 -9.691406 1.28125 -11.234375 C 1.28125 -12.867188 1.535156 -14.382812 2.046875 -15.78125 C 2.566406 -17.1875 3.289062 -18.425781 4.21875 -19.5 C 5.15625 -20.570312 6.257812 -21.398438 7.53125 -21.984375 C 8.800781 -22.578125 10.207031 -22.875 11.75 -22.875 C 13.5 -22.875 15.03125 -22.476562 16.34375 -21.6875 C 17.664062 -20.90625 18.753906 -19.851562 19.609375 -18.53125 L 19.609375 -22.484375 L 24.625 -22.484375 L 24.625 -1.078125 C 24.625 1.160156 24.085938 3.070312 23.015625 4.65625 C 21.941406 6.238281 20.460938 7.453125 18.578125 8.296875 C 16.691406 9.140625 14.546875 9.5625 12.140625 9.5625 C 9.710938 9.5625 7.65625 9.15625 5.96875 8.34375 C 4.28125 7.53125 2.832031 6.378906 1.625 4.890625 L 4.765625 1.84375 C 5.617188 2.90625 6.695312 3.734375 8 4.328125 C 9.300781 4.929688 10.679688 5.234375 12.140625 5.234375 C 13.367188 5.234375 14.488281 5.007812 15.5 4.5625 C 16.519531 4.125 17.335938 3.4375 17.953125 2.5 C 18.566406 1.570312 18.875 0.378906 18.875 -1.078125 L 18.875 -3.90625 C 18.132812 -2.613281 17.082031 -1.617188 15.71875 -0.921875 C 14.363281 -0.222656 12.925781 0.125 11.40625 0.125 Z M 13.34375 -4.46875 C 13.96875 -4.46875 14.566406 -4.566406 15.140625 -4.765625 C 15.710938 -4.960938 16.242188 -5.234375 16.734375 -5.578125 C 17.222656 -5.921875 17.648438 -6.328125 18.015625 -6.796875 C 18.390625 -7.273438 18.675781 -7.753906 18.875 -8.234375 L 18.875 -13.59375 C 18.53125 -14.488281 18.050781 -15.265625 17.4375 -15.921875 C 16.820312 -16.578125 16.132812 -17.082031 15.375 -17.4375 C 14.625 -17.800781 13.832031 -17.984375 13 -17.984375 C 12.113281 -17.984375 11.3125 -17.796875 10.59375 -17.421875 C 9.882812 -17.046875 9.269531 -16.519531 8.75 -15.84375 C 8.238281 -15.175781 7.847656 -14.4375 7.578125 -13.625 C 7.304688 -12.8125 7.171875 -11.957031 7.171875 -11.0625 C 7.171875 -10.15625 7.328125 -9.300781 7.640625 -8.5 C 7.953125 -7.695312 8.382812 -6.992188 8.9375 -6.390625 C 9.5 -5.785156 10.160156 -5.3125 10.921875 -4.96875 C 11.679688 -4.632812 12.488281 -4.46875 13.34375 -4.46875 Z M 13.34375 -4.46875 " />
              </g>
            </g>
          </g>
          <g fill="#f6e5f0" fill-opacity="1">
            <g transform="translate(270.641771, 254.568821)">
              <g>
                <path d="M 2.484375 0 L 2.484375 -6.171875 L 7.203125 -6.171875 L 7.203125 0 Z M 2.484375 0 " />
              </g>
            </g>
          </g>
          <g fill="#f6e5f0" fill-opacity="1">
            <g transform="translate(285.87006, 254.568821)">
              <g>
                <path d="M 2.484375 0 L 2.484375 -6.171875 L 7.203125 -6.171875 L 7.203125 0 Z M 2.484375 0 " />
              </g>
            </g>
          </g>
          <g fill="#f6e5f0" fill-opacity="1">
            <g transform="translate(301.098348, 254.568821)">
              <g>
                <path d="M 2.484375 0 L 2.484375 -6.171875 L 7.203125 -6.171875 L 7.203125 0 Z M 2.484375 0 " />
              </g>
            </g>
          </g>
        </svg>
      </animated.div>
    </Box>
  );
};

export default Loader;
