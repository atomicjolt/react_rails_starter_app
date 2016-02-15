import Network             from "../../constants/network";
import _                   from "lodash";
import { CanvasConstants } from "./constants";
import { CanvasMethods }   from "./constants";

describe('Canvas Constants and Methods', () => {

  describe('CanvasConstants', () => {
    it('contains a string constant for all Canvas api endpoints', () => {
      expect(CanvasConstants.SEARCH_ACCOUNT_DOMAINS).toBe("SEARCH_ACCOUNT_DOMAINS");
      expect(CanvasConstants.ACCOUNTS).toBe("ACCOUNTS");
    });
  });

  describe('CanvasMethods', () => {
    it('contains a network value for all Canvas constants', () => {
      expect(CanvasConstants.SEARCH_ACCOUNT_DOMAINS).toBe(Network.GET);
      expect(CanvasConstants.ACCOUNTS).toBe(Network.GET);
    });
  });

});