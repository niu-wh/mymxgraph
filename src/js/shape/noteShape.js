/**
 * $Id: noteShape.js,v 1.8 2011-09-02 10:01:00 gaudenz Exp $
 * Copyright (c) 2006-2010, JGraph Ltd
 */
/**
 * Class: NoteShape
 * 
 * Implementation of the noteShape shape.
 *
 * Note Shape, supports size style
 * 
 * Constructor: NoteShape
 *
 * Constructs a new noteShape shape.
 */
function NoteShape() { };
/**
 * Extends <mxCylinder>.
 */
NoteShape.prototype = new mxCylinder();

NoteShape.prototype.constructor = NoteShape;
NoteShape.prototype.size = 30;

/**
 * Function: redrawPath
 *
 * Draws the path for this shape. This method uses the <mxPath>
 * abstraction to paint the shape for VML and SVG.
 */
NoteShape.prototype.redrawPath = function(path, x, y, w, h, isForeground)
{
	var s = Math.min(w, Math.min(h, mxUtils.getValue(this.style, 'size', this.size) * this.scale));
	console.log(arguments)
	console.log(this)
	if (isForeground)
	{
		path.moveTo(w - s, 0);
		path.lineTo(w - s, s);
		path.lineTo(w, s);
		path.end();
	}
	else
	{
		path.moveTo(0, 0);
		path.lineTo(w - s, 0);
		path.lineTo(w, s);
		path.lineTo(w, h);
		path.lineTo(0, h);
		path.lineTo(0, 0);
		path.close();
		path.end();
	}
};

mxCellRenderer.prototype.defaultShapes['note'] = NoteShape;