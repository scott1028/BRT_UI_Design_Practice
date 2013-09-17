import java.applet.Applet;		// Applet Package
import java.awt.*;				// 用來繪製畫面(顯示畫面要用)

public class test extends Applet {

	// public void init(){}		// 可以不寫內容

	// public void stop(){}		// 可以不寫內容

	String title="hello world!";

	public void paint(Graphics g) {
		g.drawString(title,200,200);
	}

	public void setLabel(String msg){		// 在 JavaScript 可以使用 document.appletTagName.setTitle("ABC") 來操作
		title=msg;
		repaint();				// 內建 Method, 基於 paint() 的 Redraw
	};
};